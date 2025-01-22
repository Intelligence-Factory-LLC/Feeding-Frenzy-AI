using BasicUtilities;
using FeedingFrenzy.Data;
using FeedingFrenzy.TwilioAPI;
using Microsoft.AspNetCore.Http;
using System.Collections.Concurrent;
using System.Net.WebSockets;
using System.Text;
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;
using WebRtcVadSharp;

namespace FeedingFrenzy.Admin.Business.VoiceAgents
{
	public class TwilioWebSocketConnection
	{
		public DebugLog m_DebugLog = new DebugLog();

		private readonly RequestDelegate _next;
		public TwilioWebSocketConnection(RequestDelegate next)
		{
			Logs.DebugLog.WriteEvent("TwilioWebSocketConnection", "Constructor");
			_next = next;
		}

		public async Task InvokeAsync(HttpContext context)
		{
			if (context.Request.Path == "/audiostream" && context.WebSockets.IsWebSocketRequest)
			{
				using (var webSocket = await context.WebSockets.AcceptWebSocketAsync())
				{
					Logs.DebugLog.WriteEvent("TwilioWebSocketHandler", "WebSocket connection opened.");
					TwilioWebSocketHandler handler = new TwilioWebSocketHandler(webSocket);
					await HandleWebSocket(webSocket, handler);
				}
			}
			else
			{
				await _next(context);
			}
		}

		private async Task HandleWebSocket(WebSocket webSocket, TwilioWebSocketHandler handler)
		{
			var buffer = new byte[1024 * 4];
			WebSocketReceiveResult result;

			try
			{

				while (webSocket.State == WebSocketState.Open)
				{
					result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
					if (result.MessageType == WebSocketMessageType.Text)
					{
						var message = Encoding.UTF8.GetString(buffer, 0, result.Count);
						// Process the message using TwilioMessageHandler
						handler.OnMessage(message);
					}
					else if (result.MessageType == WebSocketMessageType.Close)
					{
						await webSocket.CloseAsync(result.CloseStatus.Value, result.CloseStatusDescription, CancellationToken.None);
						Logs.DebugLog.WriteEvent("TwilioWebSocketConnection", "WebSocket connection closed.");
					}
				}

				await handler.OnClose();
			}

			catch (Exception ex)
			{
				Logs.LogError(ex);
			}
		}
	}

	public class TwilioWebSocketHandler
	{
		public class CallData
		{
			public class Media
			{
				public int chunk;
				public string track;
				public int timestamp;
				public string payload;
			}

			public string streamSid;
			public string File;
			public JsonObject startData = new JsonObject();
			public List<Media> media = new List<Media>();
			public List<byte> buffer = new List<byte>();
			public List<byte> chunk = new List<byte>();
			public bool IsOpened = false;
			public AudioProcessorPCM? AudioProcessor_Right = null;
			public AudioProcessorPCM? AudioProcessor_Left = null;

			public bool IsSpeaking = false;
			public int LastSpeakingChange = 0;
			public int CurrentTimestamp = 0;

			public DateTime? SessionStart = null;
			public int GetSessionDuration()
			{
				if (null == this.SessionStart)
					return 0;
				return (int)(DateTime.Now - this.SessionStart).Value.TotalMilliseconds;
			}


			public int? CallID = null;
			public CallsRow? Call = null;

			public int? AgentID = null;
			public AgentsRow? Agent = null;
		}


		private OpenAIWebSocketHandler m_openAIWebSocketHandler = null;
		public CallData? m_callData = new CallData();


		private WebSocket m_webSocket;

		public DebugLog m_DebugLog = new DebugLog();
		private WebRtcVad vad;
		public TwilioWebSocketHandler(WebSocket webSocket)
		{
			m_DebugLog.Name = "Twilio Messages";
			m_DebugLog.LogPath = Logs.DebugLog.LogPath;
			m_DebugLog.MaxLinesPerFile = 0;
			m_webSocket = webSocket;
			vad = new WebRtcVad();
			StartMessageProcessingThread();
		}
		public void OnOpen()
		{
			Logs.DebugLog.WriteEvent("TwilioWebSocket.OnOpen", "WebSocket connection opened.");

			m_openAIWebSocketHandler = new OpenAIWebSocketHandler(this, this.m_callData.Agent);
			m_openAIWebSocketHandler.InitializeOpenAiWebSocket();
		}

		public void OnMessage(string message)
		{

			try
			{
				JsonObject jsonEvent = new JsonObject(message);

				string? strStreamSid = jsonEvent.GetStringOrNull("streamSid");

				if (StringUtil.IsEmpty(strStreamSid))
				{
					return;
				}

				CallData callData = this.m_callData ?? throw new Exception("CallData is null");
				callData.streamSid = strStreamSid!;


				if (null == callData.AudioProcessor_Right)
					m_callData.AudioProcessor_Right = new AudioProcessorPCM(FileUtil.BuildPath(AudioDirectory, $"{strStreamSid}_right.wav"));

				if (null == callData.AudioProcessor_Left)
					m_callData.AudioProcessor_Left = new AudioProcessorPCM(FileUtil.BuildPath(AudioDirectory, $"{strStreamSid}_left.wav"));

				string? strEvent = jsonEvent.GetStringOrNull("event");

				if (StringUtil.EqualNoCase(strEvent, "start"))
				{
					ProcessStartEvent(jsonEvent, callData);
				}

				m_DebugLog.WriteEvent("TwilioWebSocket.OnMessage", message);

				if (StringUtil.EqualNoCase(strEvent, "media"))
				{
					ProcessMediaEvent(jsonEvent, callData);
				}

				if (StringUtil.EqualNoCase(strEvent, "stop"))
				{
					ProcessStopEvent(strStreamSid);
				}

			}
			catch (Exception err)
			{
				Logs.DebugLog.WriteEvent("Error Processing Message", message);
				Logs.LogError(err);
			}
		}

		public async Task OnClose()
		{
			Logs.DebugLog.WriteEvent("TwilioWebSocket.OnClose", "WebSocket connection closed.");

			StopProcessing();

			if (this.m_openAIWebSocketHandler.IsOpened)
			{
				await m_openAIWebSocketHandler.HandleClose();
			}

			try
			{
				if (null != this.m_callData)
				{           //Eventually all of this needs to be moved out to a Post Processing eveng
					this.m_callData.AudioProcessor_Right?.Close();
					m_openAIWebSocketHandler.WriteAudio(this.m_callData.AudioProcessor_Left);

					string strCombinedFile = FileUtil.BuildPath(AudioDirectory, $"{this.m_callData.CallID}.wav");
					AudioUtils.CombineWavFiles(this.m_callData.AudioProcessor_Left.File, this.m_callData.AudioProcessor_Right.File, strCombinedFile);

					this.m_callData.IsOpened = false;

					if (null != this.m_callData.Call)
					{
						CallsRow rowCall = CallsRepository.Get(this.m_callData.CallID!.Value);

						rowCall.CallStatus = "Completed";
						rowCall.LastCallStatusUpdate = DateTime.Now;
						rowCall.Duration = Math.Round((DateTime.Now - rowCall.DateCreated).TotalSeconds);
						rowCall.Transcription = this.m_callData.Call.Transcription;
						rowCall.IsEmptyTranscription = false;
						rowCall.IsTranscribed = true;
						rowCall.RecordingURL = await CallRecordings.UploadAudioToS3Async(strCombinedFile);
						rowCall.IsRecorded = true;

						CallsRepository.UpdateCall(rowCall);

						Calls.PostProcessCall(rowCall.CallID!);
					}
				}
			}
			catch (Exception err)
			{
				Logs.DebugLog.WriteEvent("OnClose.PostProcessCall Failed", this.m_callData.CallID.ToString());
				Logs.LogError(err);
			}



		}


		private static string AudioDirectory
		{
			get
			{
				return BasicUtilities.Settings.GetStringOrDefault("Buffaly.AudioDirectory", @"C:\temp\audiostream");
			}
		}


		private async Task ProcessStartEvent(JsonObject jsonEvent, CallData callData)
		{
			callData.startData = jsonEvent.GetJsonObjectOrDefault("start");

			this.m_callData.CallID = jsonEvent.GetJsonObjectOrDefault("start").GetJsonObjectOrDefault("customParameters").GetIntOrNull("CallID");
			if (null != this.m_callData.CallID)
			{
				Logs.DebugLog.WriteEvent("CallID", this.m_callData.CallID.ToString());

				m_DebugLog.Prefix = this.m_callData.CallID.ToString();

				this.m_callData.Call = CallsRepository.Get(this.m_callData.CallID.Value);
				this.m_callData.Call.CallStatus = "Streaming";
				this.m_callData.Call.LastCallStatusUpdate = DateTime.Now;
				CallsRepository.UpdateCall(this.m_callData.Call);
			}

			this.m_callData.AgentID = jsonEvent.GetJsonObjectOrDefault("start").GetJsonObjectOrDefault("customParameters").GetIntOrNull("AgentID");
			if (null != this.m_callData.AgentID)
			{
				Logs.DebugLog.WriteEvent("AgentID", this.m_callData.AgentID.ToString());
				this.m_callData.Agent = AgentsRepository.Get(this.m_callData.AgentID.Value);
			}
			else
			{
				throw new Exception("No agent specified for this request");
			}


			//Moved here so we can pull the agent
			this.OnOpen();

			if (!Directory.Exists(AudioDirectory))
			{
				Directory.CreateDirectory(AudioDirectory);
			}

			callData.File = Path.Combine(AudioDirectory, callData.streamSid + ".wav");

			callData.IsOpened = true;
			Logs.DebugLog.WriteEvent("Stream Opened", callData.streamSid);
		}

		private async Task ProcessStopEvent(string strStreamSid)
		{
			Logs.DebugLog.WriteEvent("Stream Stopped", strStreamSid);

		}

		private async Task ProcessMediaEvent(JsonObject jsonEvent, CallData callData)
		{
			CallData.Media media = new CallData.Media();

			JsonObject jsonMedia = jsonEvent.GetJsonObjectOrDefault("media");

			media.chunk = jsonMedia.GetIntOrDefault("chunk", 0)!.Value;
			media.track = jsonMedia.GetStringOrNull("track") ?? string.Empty;
			media.timestamp = jsonMedia.GetIntOrDefault("timestamp", 0)!.Value;
			media.payload = jsonMedia.GetStringOrNull("payload") ?? string.Empty;

			callData.media.Add(media);


			{
				var bytes = Convert.FromBase64String(media.payload);

				if (media.track == "outbound")
					return;

				bool bIsSpeaking = vad.HasSpeech(AudioUtils.DecodeMuLawToPcm(bytes), SampleRate.Is8kHz, FrameLength.Is20ms);

				if (bIsSpeaking != callData.IsSpeaking)
				{
					Logs.DebugLog.WriteEvent("@" + media.timestamp.ToString(), "VAD Speaking change: " + (bIsSpeaking ? "Speaking" : "Not Speaking") + " " + (media.timestamp - callData.LastSpeakingChange).ToString() + "ms");
					callData.IsSpeaking = bIsSpeaking;
					callData.LastSpeakingChange = media.timestamp;
				}

				callData.chunk.AddRange(bytes);
				callData.CurrentTimestamp = media.timestamp;

				if (callData.chunk.Count < 2000)
					return;
			}

			byte[] bytesBuffered = callData.chunk.ToArray();
			callData.chunk = new List<byte>();
			callData.buffer.AddRange(bytesBuffered);
			callData.AudioProcessor_Right?.WriteToWav(bytesBuffered);

			if (callData.IsOpened && m_openAIWebSocketHandler.IsOpened)
			{
				byte[] bytesToSend = callData.buffer.ToArray();
				callData.buffer = new List<byte>();


				var audioAppend = new
				{
					type = "input_audio_buffer.append",
					audio = Convert.ToBase64String(bytesToSend)
				};

				string audioAppendJson = JsonUtil.ToString(audioAppend).ToString();

				// Send audio data to OpenAI WebSocket
				await m_openAIWebSocketHandler.SendAsync(audioAppendJson);


			}
			else
			{
				//Logs.DebugLog.WriteEvent("Buffered", callData.streamSid);
			}
		}


		private ConcurrentQueue<(JsonObject Event, DateTime NeededBy)> messageQueue = new ConcurrentQueue<(JsonObject Event, DateTime)>();

		// Method to handle sending a message and adding it to the queue with a "needed by" time
		public void HandleSend(JsonObject jsonEvent, DateTime neededBy)
		{
			messageQueue.Enqueue((jsonEvent, neededBy));
		}



		private CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();

		// Start a thread that runs every 100 ms to process the queue
		private void StartMessageProcessingThread()
		{
			Task.Run(async () =>
			{
				while (!cancellationTokenSource.Token.IsCancellationRequested)
				{
					// Process messages from the queue
					if (messageQueue.TryPeek(out var queuedItem))
					{
						JsonObject jsonEvent = queuedItem.Event;
						DateTime neededBy = queuedItem.NeededBy;

						// Calculate the time difference to determine if the message should be sent
						double millisecondsUntilNeeded = (neededBy - DateTime.Now).TotalMilliseconds;

						if (millisecondsUntilNeeded <= 500)
						{
							//Remove the item when it's ready 
							messageQueue.TryDequeue(out var item);

							//Mark the message as delivered for the audio stream
							jsonEvent["IsDelivered"] = true;

							var response = new
							{
								streamSid = m_callData.streamSid,
								media = new
								{
									payload = jsonEvent.GetStringOrNull("delta") ?? throw new Exception("Missing Delta")
								}
							};

							JsonObject jsonResponse = new JsonValue(response).ToJsonObject()!;
							jsonResponse["event"] = "media";

							await SendMessageAsync(jsonResponse.ToJSON());
						}

						else if (millisecondsUntilNeeded < 0)
						{
							messageQueue.TryDequeue(out var item);
							Logs.DebugLog.WriteEvent("TwilioMessageHandler", "Message discarded due to timeout.");
						}
					}

					// Wait for 20 milliseconds before checking the queue again
					await Task.Delay(20, cancellationTokenSource.Token);
				}

				Logs.DebugLog.WriteEvent("TwilioMessageHandler", "Message processing thread stopped.");

			}, cancellationTokenSource.Token);
		}

		public void HandleInterrupt()
		{
			messageQueue.Clear();
		}

		// Method to send the message over the WebSocket
		private async Task SendMessageAsync(string message)
		{
			if (this.m_webSocket != null && this.m_webSocket.State == WebSocketState.Open)
			{
				var messageBytes = Encoding.UTF8.GetBytes(message);
				var messageSegment = new ArraySegment<byte>(messageBytes);

				await this.m_webSocket.SendAsync(messageSegment, WebSocketMessageType.Text, true, CancellationToken.None);
			}
			else
			{
				Logs.DebugLog.WriteEvent("TwilioMessageHandler.HandleSend", "WebSocket is not open. Unable to send message.");
			}
		}

		// Method to stop the message processing thread
		public void StopProcessing()
		{
			cancellationTokenSource.Cancel();
		}

		public void AppendTranscription(string strTranscript, bool bIsVoiceAgent, int iStart, int iStop)
		{
			if (null != this.m_callData.Call)
			{
				CallsRow rowCall = this.m_callData.Call;
				JsonArray jsonTranscriptions = rowCall.DataObject.GetJsonArrayOrDefault("TranscriptionCombined");
				JsonArray jsonEvents = rowCall.DataObject.GetJsonArrayOrDefault("Events") ?? new JsonArray();

				//Sometimes the transcription is returned in short segements. Combine them into a single 
				//Segment for better display
				bool bAppended = false;
				if (jsonTranscriptions.Count > 0)
				{
					JsonObject jsonLastTranscription = jsonTranscriptions.Last().ToJsonObject()!;
					if (jsonLastTranscription.GetIntOrNull("LeftOrRight") == (bIsVoiceAgent ? 0 : 1))
					{
						Logs.DebugLog.WriteEvent("AppendTranscription", "Appending to last transcription: " + strTranscript);
						jsonLastTranscription["Text"] = jsonLastTranscription.GetStringOrNull("Text") + " " + strTranscript;
						jsonLastTranscription["Stop"] = iStop;
						jsonLastTranscription["Length"] = iStop - jsonLastTranscription.GetIntOrDefault("Start", 0)!.Value;

						bAppended = true;
					}
				}

				if (!bAppended)
				{
					jsonTranscriptions.Add(new JsonValue(new
					{
						LeftOrRight = bIsVoiceAgent ? 0 : 1,
						Text = strTranscript,
						Start = iStart,
						Stop = iStop,
						Length = iStop - iStart
					}));
				}

				rowCall.DataObject["TranscriptionCombined"] = jsonTranscriptions;
				CallsRepository.UpdateCallData(rowCall);

				//These will be saved to the database at the end of the call
				rowCall.Transcription += (bIsVoiceAgent) ? "Voice Agent" : "Caller";
				rowCall.Transcription += ":\r\n " + strTranscript + "\r\n\r\n";

				if (StringUtil.InString(strTranscript, "transferring you") &&
					!StringUtil.IsEmpty(this.m_callData.Agent.DataObject.GetStringOrNull("TransferNumber")))
				{
					Logs.DebugLog.WriteEvent("AppendTranscription", "Transfer detected: " + this.m_callData.Call.CallKey);

					jsonEvents = VoiceAgents.AddCallEvent(jsonEvents, "TransferDetected", new
					{
						Message = "Transfer detected based on transcription.",
						TransferNumber = this.m_callData.Agent.DataObject.GetStringOrNull("TransferNumber")
					});

					Logs.DebugLog.WriteEvent("TransferDetected", jsonEvents.ToJSON());

					try
					{
						TwilioClient.Init(TwilioFeature.Feature.AccountSID, TwilioFeature.Feature.AuthToken);

						var updatedCall = CallResource.Update(
							twiml: new Twiml($"<Response><Dial>{this.m_callData.Agent.DataObject.GetStringOrNull("TransferNumber")}</Dial></Response>"),
							pathSid: this.m_callData.Call.CallKey
						);

					}
					catch (Exception err)
					{
						Logs.LogError(err);
					}
				}

				//Check for potential leads
				try
				{

					int iDataExtractorID =
						Buffaly.SemanticDB.DataExtractors.GetDataExtractorByName("Lead Extractor - Incoming").DataExtractorID;

					string strJson =
						Buffaly.SemanticDB.DataExtractors.EvaluateDataExtractor(iDataExtractorID, strTranscript);

					JsonObject jsonExtractedData = new JsonObject(strJson);

					Logs.DebugLog.WriteEvent("PotentialLeadCaptured", jsonExtractedData.ToJSON());

					if (jsonExtractedData.GetStringOrNull("EventType") == "PotentialLeadCaptured")
					{
						Logs.DebugLog.WriteEvent("PotentialLeadCaptured", jsonExtractedData.GetStringOrNull("EventType"));

						if (!jsonEvents.Any(x => x.ToJsonObject()!.GetStringOrNull("EventType") == "PotentialLeadCaptured"))
						{
							jsonEvents = VoiceAgents.AddCallEvent(jsonEvents, "PotentialLeadCaptured", new
							{
								Message = "Potencial Lead detected based on transcription.",
								Text = strTranscript,
								Start = iStart,
								Stop = iStop
							});
						}
					}

				}
				catch (Exception err)
				{
					Logs.LogError(err);
				}

				if (jsonEvents.Count > 0)
				{
					rowCall.DataObject["Events"] = jsonEvents;
					CallsRepository.UpdateCallData(rowCall);
				}

			}

		}

	}





}
