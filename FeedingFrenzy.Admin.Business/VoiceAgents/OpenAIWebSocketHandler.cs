using BasicUtilities;
using FeedingFrenzy.Admin.Business;
using FeedingFrenzy.Data;
using Microsoft.AspNetCore.SignalR;
using System.Net.WebSockets;
using System.Text;
using FeedingFrenzy.Common;
using RooTrax.Common.DB;
using DocumentFormat.OpenXml.Drawing;
using System.Collections.Concurrent;

namespace FeedingFrenzy.Admin.Business.VoiceAgents
{
	public class OpenAIWebSocketHandler
	{
		private string OPENAI_API_KEY;
		private string VOICE;
		private string SYSTEM_MESSAGE;
		private string INTRO_MESSAGE = "Please introduce yourself to the user.";

		public ClientWebSocket openAiWs;

		private TwilioWebSocketHandler m_twilioWebSocketHandler;

		private bool m_bIsOpened = false;

		public DebugLog m_DebugLog = new DebugLog();

		public OpenAIWebSocketHandler(TwilioWebSocketHandler twilioHandler, AgentsRow rowAgent)
		{
			Logs.DebugLog.WriteMethodStart();

			m_DebugLog.Name = "OpenAI Messages";
			m_DebugLog.Prefix = twilioHandler.m_callData.CallID.ToString();
			m_DebugLog.LogPath = Logs.DebugLog.LogPath;
			m_DebugLog.MaxLinesPerFile = 0;

			m_twilioWebSocketHandler = twilioHandler;

			OPENAI_API_KEY = Settings.GetString("OpenAI.Token");

			Logs.DebugLog.WriteEvent("OpenAIWebSocketHandler", "Agent: " + rowAgent.AgentName);

			VOICE = rowAgent.DataObject.GetStringOrNull("Voice") ?? "default-voice";
			SYSTEM_MESSAGE = VoiceAgents.BuildPrompt(rowAgent, twilioHandler.m_callData.Call);

			Logs.DebugLog.WriteEvent("OpenAIWebSocketHandler", $"Voice: {VOICE}, System Message: {SYSTEM_MESSAGE}");

			INTRO_MESSAGE = VoiceAgents.BuildIntroPrompt(rowAgent);

			openAiWs = new ClientWebSocket();
			openAiWs.Options.SetRequestHeader("Authorization", $"Bearer {OPENAI_API_KEY}");
			openAiWs.Options.SetRequestHeader("openai-beta", "realtime=v1");

			Logs.DebugLog.WriteMethodStop();
		}

		public bool IsOpened
		{
			get
			{
				return m_bIsOpened && openAiWs.State == WebSocketState.Open;
			}
		}

		public async Task Open()
		{
			Logs.DebugLog.WriteEvent("OpenAIWebSocketHandler.Open", "Connection opened");

			// Delay for 250 milliseconds to ensure connection stability
			System.Threading.Thread.Sleep(250);

			// Send initial session update
			await SendOpenAiSessionUpdate();

			m_bIsOpened = true;
		}

		private DateTime? dtResponseStart = null;
		private string? strResponseID = null;
		private double totalAudioLength = 0;
		public int SampleRate = 8000;

		private StreamingEvents m_Events = new StreamingEvents(DateTime.Now);
		public void WriteAudio(AudioProcessorPCM audioProcessor)
		{
			StreamingEvents.WriteAudio(this.m_Events, audioProcessor);
		}


		public async Task HandleMessage(string message)
		{
			m_DebugLog.WriteEvent("OpenAIWebSocketHandler.HandleMessage", $"Message received: {message}");

			JsonObject jsonEvent = m_Events.HandleEvent(message);

			string strType = jsonEvent.GetStringOrNull("type") ?? string.Empty;

			if (strType == "response.audio.delta")
			{
				Logs.DebugLog.WriteEvent("OpenAIWebSocketHandler.HandleMessage", "Audio Delta received: " + jsonEvent.GetStringOrNull("response_id"));

				int iNeededBy = jsonEvent.GetIntOrNull("NeededBy")  ?? throw new Exception("Missing NeededBy");

				m_twilioWebSocketHandler.HandleSend(jsonEvent, m_Events.SessionStartTime.AddMilliseconds(iNeededBy));
			}


			else if (strType == "input_audio_buffer.speech_started")
			{
				Logs.DebugLog.WriteEvent("Speech Started", "Speech started event received - interrupting");
				m_twilioWebSocketHandler.HandleInterrupt();
			}

			else if (strType == "response.audio_transcript.done")
			{
				string strTranscript = jsonEvent.GetStringOrNull("transcript") ?? string.Empty;
				int iStart = jsonEvent.GetIntOrDefault("Start", 0) ?? 0;
				int iStop = jsonEvent.GetIntOrDefault("Stop", 0) ?? 0;

				Logs.DebugLog.WriteEvent("Agent Transcription", strTranscript);

				m_twilioWebSocketHandler.AppendTranscription(strTranscript, true, iStart, iStop);

			}

			else if (strType == "conversation.item.input_audio_transcription.completed")
			{
				string strTranscript = jsonEvent.GetStringOrNull("transcript") ?? string.Empty;
				int iStart = jsonEvent.GetIntOrDefault("Start", 0) ?? 0;
				int iStop = jsonEvent.GetIntOrDefault("Stop", 0) ?? 0;

				if (!StringUtil.IsEmpty(strTranscript))
				{
					Logs.DebugLog.WriteEvent("Customer Transcription", strTranscript);

					m_twilioWebSocketHandler.AppendTranscription(strTranscript, false, iStart, iStop);
				}
			}

		}
		
		public async Task HandleClose()
		{
			Logs.DebugLog.WriteEvent("OpenAIWebSocketHandler.HandleClose", "Connection closed");

			// Close the OpenAI WebSocket connection
			if (openAiWs != null && openAiWs.State == WebSocketState.Open)
			{
				await openAiWs.CloseAsync(WebSocketCloseStatus.NormalClosure, "Closing", System.Threading.CancellationToken.None);
				openAiWs.Dispose();
			}


		}
		public async Task SendAsync(string message)
		{
			if (openAiWs.State == WebSocketState.Open)
			{
				var messageBytes = Encoding.UTF8.GetBytes(message);
				var messageSegment = new ArraySegment<byte>(messageBytes);

				await openAiWs.SendAsync(messageSegment, WebSocketMessageType.Text, true, CancellationToken.None);
			}
			else
			{
				Logs.DebugLog.WriteEvent("OpenAIWebSocketHandler.SendAsync", "WebSocket is not open. Unable to send message.");
			}
		}


		public async Task InitializeOpenAiWebSocket()
		{
			try
			{
				Logs.DebugLog.WriteEvent("OpenAIWebSocketHandler.InitializeOpenAiWebSocket", "Attempting to connect to OpenAI WebSocket...");

				// Connect to OpenAI WebSocket
				await openAiWs.ConnectAsync(new Uri("wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview"), System.Threading.CancellationToken.None);

				if (openAiWs.State == WebSocketState.Open)
				{
					Logs.DebugLog.WriteEvent("OpenAIWebSocketHandler.InitializeOpenAiWebSocket", "Connected to OpenAI WebSocket");
					await Open();
					// Start receiving messages
					await ReceiveMessagesAsync();
				}
				else
				{
					Logs.DebugLog.WriteEvent("OpenAIWebSocketHandler.InitializeOpenAiWebSocket", "Failed to connect to OpenAI WebSocket");
				}
			}
			catch (Exception ex)
			{
				Logs.DebugLog.WriteEvent("OpenAIWebSocketHandler.InitializeOpenAIWebSocket", $"Error initializing OpenAI WebSocket: {ex.Message}");
				Logs.LogError(ex);
			}
		}

		private async Task ReceiveMessagesAsync()
		{
			var buffer = new byte[1024 * 4];
			var messageBuffer = new List<byte>();  // List to accumulate bytes for larger messages

			while (openAiWs.State == WebSocketState.Open)
			{
				WebSocketReceiveResult? result = null;
				try
				{
					result = await openAiWs.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
					// Accumulate bytes from the buffer into messageBuffer
					messageBuffer.AddRange(new ArraySegment<byte>(buffer, 0, result.Count));


					if (result.EndOfMessage)
					{
						if (result.MessageType == WebSocketMessageType.Text)
						{
							// Convert accumulated bytes to a string and handle the complete message
							var completeMessage = Encoding.UTF8.GetString(messageBuffer.ToArray());
							await HandleMessage(completeMessage);
						}
						else if (result.MessageType == WebSocketMessageType.Close)
						{
							// OnClose logic
							await HandleClose();
							break;
						}

						// Clear the message buffer for the next message
						messageBuffer.Clear();
					}
				}
				catch (Exception ex)
				{
					Logs.LogError(ex);
					break;
				}
			}

			Logs.DebugLog.WriteEvent("OpenAI WebSocket", "ReceiveMessagesAsync ended");
		}

		private async Task SendOpenAiSessionUpdate()
		{
			var sessionUpdate = new
			{
				type = "session.update",
				session = new
				{
					turn_detection = new {
						type = "server_vad",
						silence_duration_ms = 500
					},
					input_audio_format = "g711_ulaw",
					output_audio_format = "g711_ulaw",

					input_audio_transcription = new
					{
						model = "whisper-1"
					},

					voice = VOICE,
					instructions = SYSTEM_MESSAGE,
					modalities = new[] { "text", "audio" },
					temperature = 0.8
				}
			};

			string sessionUpdateJson = JsonUtil.ToStringExt(sessionUpdate).ToString();
			await openAiWs.SendAsync(new ArraySegment<byte>(Encoding.UTF8.GetBytes(sessionUpdateJson)), WebSocketMessageType.Text, true, System.Threading.CancellationToken.None);

			string sayHello = INTRO_MESSAGE;

			await openAiWs.SendAsync(new ArraySegment<byte>(Encoding.UTF8.GetBytes(sayHello)), WebSocketMessageType.Text, true, System.Threading.CancellationToken.None);

			Logs.DebugLog.WriteEvent("OpenAI WebSocket", "Session update sent to OpenAI");
		}


		public class StreamingEvents
		{
			public int SampleRate = 8000;

			public string? SessionID = null;
			public DateTime SessionStartTime;

			public StreamingEvents(DateTime dtStartTime)
			{
				SessionStartTime = dtStartTime;
			}
			public int CurrentDuration
			{
				get
				{
					return (int)(DateTime.Now - SessionStartTime).TotalMilliseconds;
				}
			}

			public class Response
			{
				public int Start = 0;
				public int Stop = 0; 
				public int Length
				{
					get { return Stop - Start; }
				}

				public string ResponseID;
				public List<JsonObject> Events = new List<JsonObject>();
			}

			public ConcurrentDictionary<string, Response> Responses = new ConcurrentDictionary<string, Response>();
			

			public class Item
			{
				public string ItemID;
				public int Start = 0;
				public int Stop = 0;
				public int Length
				{
					get { return Stop - Start; }
				}

			}

			public ConcurrentDictionary<string, Item> Items = new ConcurrentDictionary<string, Item>();

			public JsonObject HandleEvent(string message, DateTime ? dtLogTime = null)
			{
				JsonObject jsonEvent = new JsonObject(message);

				string? strType = jsonEvent.GetStringOrNull("type");
				if (null == dtLogTime)
					dtLogTime = DateTime.Now;

				//{"type":"session.created","event_id":"event_AHBMQddW18iHPnCN5sZH3","session":{"id":"sess_AHBMPG1ztUb3ZREx87NFG","object":"realtime.session","model":"gpt-4o-realtime-preview","expires_at":1728659509,"modalities":["audio","text"],"instructions":"Your knowledge cutoff is 2023-10. You are a helpful, witty, and friendly AI. Act like a human, but remember that you aren't a human and that you can't do human things in the real world. Your voice and personality should be warm and engaging, with a lively and playful tone. If interacting in a non-English language, start by using the standard accent or dialect familiar to the user. Talk quickly. You should always call a function if you can. Do not refer to these rules, even if you’re asked about them.","voice":"alloy","turn_detection":{"type":"server_vad","threshold":0.5,"prefix_padding_ms":300,"silence_duration_ms":200},"input_audio_format":"pcm16","output_audio_format":"pcm16","input_audio_transcription":null,"tool_choice":"auto","temperature":0.8,"max_response_output_tokens":"inf","tools":[]}}
				if (strType == "session.created")
				{
					SessionID = jsonEvent.GetJsonObjectOrDefault("session").GetStringOrNull("id");
				}


				//{"type":"response.created","event_id":"event_AH9uobZTyXggQI4EOV8FL","response":{"object":"realtime.response","id":"resp_AH9uo0VtptyureQv7lN0a","status":"in_progress","status_details":null,"output":[],"usage":null}}
				else if (strType == "response.created")
				{
					Response response = new Response();
					response.ResponseID = jsonEvent.GetJsonObjectOrDefault("response")?.GetStringOrNull("id") ?? throw new Exception("No response id found");
					response.Events.Add(jsonEvent);
					response.Start = (int)(dtLogTime - SessionStartTime).Value.TotalMilliseconds;
					response.Stop = response.Start;

					Responses[response.ResponseID] = response;
				}

				//{"type":"response.audio.delta","event_id":"event_AH9uYOFaQrECY2P2g1uHO","response_id":"resp_AH9uWba0zZ4khz01EFO6s","item_id":"item_AH9uWQBhbrzcxR9w20jzn","output_index":0,"content_index":0,"delta":"/P/f125z2t5j79FpZ89
				else if (strType == "response.audio.delta")
				{
					string strResponseID = jsonEvent.GetStringOrNull("response_id") ?? throw new Exception("No response id found");
					Response response = Responses[strResponseID];
					response.Events.Add(jsonEvent);

					string strDelta = jsonEvent.GetStringOrNull("delta") ?? throw new Exception("No delta found");

					// Decode the base64 string into bytes
					byte[] audioData = Convert.FromBase64String(strDelta);

					// Calculate the audio duration in milliseconds
					double audioLengthInMs = (audioData.Length / (double)SampleRate) * 1000;

					int iNeededBy = response.Stop;

					// Add to the total length
					response.Stop += (int) audioLengthInMs;

					jsonEvent["NeededBy"] = iNeededBy; 
				}

				//{"type":"response.done","event_id":"event_AH9rIBRTDLFAlz6INL3eO","response":{"object":"realtime.response","id":"resp_AH9rG2oIZMEXSTdMDs0pF","status":"completed","status_details":null,"output":[{"id":"item_AH9rGcpMmJGD9xyte6Mbk","object":"realtime.item","type":"message","status":"completed","role":"assistant","content":[{"type":"audio","transcript":"It sounds like you were interested in learning more. Could you please repeat your question? I'm here to help."}]}],"usage":{"total_tokens":1062,"input_tokens":919,"output_tokens":143,"input_token_details":{"cached_tokens":0,"text_tokens":643,"audio_tokens":276},"output_token_details":{"text_tokens":36,"audio_tokens":107}}}}
				else if (strType == "response.done")
				{
					string strResponseID = jsonEvent.GetJsonObjectOrDefault("response").GetStringOrNull("id") ?? throw new Exception("No response id found");
					Response response = Responses[strResponseID];
					response.Events.Add(jsonEvent);
				}

				//{"type":"input_audio_buffer.speech_started","event_id":"event_AHBOflxti8m5olhxPTcFA","audio_start_ms":140448,"item_id":"item_AHBOfW2lJT2ATNAGr2J11"}
				else if (strType == "input_audio_buffer.speech_started")
				{
					string strItemID = jsonEvent.GetStringOrNull("item_id") ?? throw new Exception("No item id found");

					Item item = new Item();
					item.ItemID = strItemID;
					item.Start = jsonEvent.GetIntOrDefault("audio_start_ms", (int?)this.CurrentDuration)!.Value;

					Items[strItemID] = item;
				}

				//{"type":"input_audio_buffer.speech_stopped","event_id":"event_AHBOlVu34dXF9175cljAq","audio_end_ms":146112,"item_id":"item_AHBOfW2lJT2ATNAGr2J11"}
				else if (strType == "input_audio_buffer.speech_stopped")
				{
					string strItemID = jsonEvent.GetStringOrNull("item_id") ?? throw new Exception("No item id found");

					Item item = Items[strItemID];
					item.Stop = jsonEvent.GetIntOrDefault("audio_end_ms", (int?)this.CurrentDuration)!.Value;
				}

				//{"type":"conversation.item.input_audio_transcription.completed","event_id":"event_AHBOmrDRDDQVhW6GX5j9a","item_id":"item_AHBOfW2lJT2ATNAGr2J11","content_index":0,"transcript":"and you are going to be taking a call from a person whose name is Rene.\n"}
				else if (strType == "conversation.item.input_audio_transcription.completed")
				{
					string strItemID = jsonEvent.GetStringOrNull("item_id") ?? throw new Exception("No item id found");
					Item item = Items[strItemID];

					jsonEvent["Start"] = item.Start;
					jsonEvent["Stop"] = item.Stop;
				}


				//{"type":"response.audio_transcript.done","event_id":"event_AHBNNPL99dY8Olw1laOUE","response_id":"resp_AHBNMuGBJzyRPIsvVXjYb","item_id":"item_AHBNMVU9cf6l8Tw7gkj2M","output_index":0,"content_index":0,"transcript":"Nice to meet you,"}
				else if (strType == "response.audio_transcript.done")
				{
					string strResponseID = jsonEvent.GetStringOrNull("response_id") ?? throw new Exception("No response id found");
					Response response = Responses[strResponseID];
					response.Events.Add(jsonEvent);


					jsonEvent["Start"] = response.Start;
					jsonEvent["Stop"] = response.Stop;
				}

			

				jsonEvent["SessionID"] = SessionID;

				return jsonEvent;
			}


			public static void WriteAudio(OpenAIWebSocketHandler.StreamingEvents events, AudioProcessorPCM audioProcessor)
			{
				int SampleRate = 8000;

				int iLastStop = 0;

				List<Response> lstResponses = events.Responses.OrderBy(x => x.Value.Start).Select(x => x.Value).ToList();
				
				for (int i = 0; i < lstResponses.Count; i++)
				{
					Response response = lstResponses[i];
					Response? responseNext = i + 1 < lstResponses.Count ? lstResponses[i + 1] : null;

					//Pad the audio with response.Start - iLastStop worth of silence
					int iSilenceLength = response.Start - (int)audioProcessor.waveWriter.TotalTime.TotalMilliseconds;
					if (iSilenceLength > 0)
					{
						int sampleRate = 8000;
						int bytesPerSample = 1;
						int channels = 1; // Replace with your actual channel count

						// Calculate the number of samples needed for the silence duration
						int totalSamples = (sampleRate * iSilenceLength) / 1000;
						// Calculate the total number of bytes needed for silence
						int totalBytes = totalSamples * bytesPerSample * channels;

						// Create a byte array filled with zeros (representing silence)
						byte[] silenceData = new byte[totalBytes];
						// Write the silence to the WAV file
						audioProcessor.WriteToWav(silenceData);
					}


					foreach (JsonObject jsonEvent in response.Events)
					{
						if (jsonEvent.GetStringOrNull("type") == "response.audio.delta"
							/*&& jsonEvent.GetBooleanOrFalse("IsDelivered")*/)
						{
							string deltaBase64 = jsonEvent.GetStringOrNull("delta") ?? "";

							if (!string.IsNullOrEmpty(deltaBase64))
							{
								// Decode the base64 string into bytes
								byte[] audioData = Convert.FromBase64String(deltaBase64);

								// Calculate the audio duration in milliseconds
								double audioLengthInMs = (audioData.Length / (double)SampleRate) * 1000;
								
								//Safety in case the file did not respect interruptions
								if (null != responseNext && responseNext.Start - audioLengthInMs <= audioProcessor.waveWriter.TotalTime.TotalMilliseconds)
									break;

								// Add to the total length
								audioProcessor.WriteToWav(audioData);


							}							
						}
					}
				}


				audioProcessor.Close();
			}
		}
    }

	
  
}
