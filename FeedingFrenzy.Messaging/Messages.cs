using BasicUtilities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SignalR.Client;
using System.Net;
using System.Threading.Tasks;
using static FeedingFrenzy.Messaging.Messages;

namespace FeedingFrenzy.Messaging
{
	public interface IMessages
	{
		Task ConnectAsync();
		Task SendMessageAsync(string strTo, Message oMessage);
	}

	public class Messages : IMessages
	{
		private readonly IHttpContextAccessor _httpContextAccessor;
		private static HubConnection ? _connection = null;
		private static bool _isConnected;

		public class Message
		{
			public string To;
			public string MessageType;
			public string Formats;
			public string Title;
			public object Payload;
			public string Link;
			public string UserMessage;
		}

		public Messages(IHttpContextAccessor  httpContextAccessor)
		{
			_httpContextAccessor = httpContextAccessor;

			if (null == _connection && null != httpContextAccessor.HttpContext)
			{
				var baseUrl = $"{_httpContextAccessor.HttpContext?.Request?.Scheme}://{_httpContextAccessor.HttpContext?.Request?.Host}";
				var notificationUrl = $"{baseUrl}/notifications";

				Logs.DebugLog.WriteEvent("FeedingFrenzy.Messaging", $"Notification URL: {notificationUrl}");

				_connection = new HubConnectionBuilder()
					.WithUrl(notificationUrl)
					.WithAutomaticReconnect()
					.Build();

				_connection.Closed += OnConnectionClosed;
				_connection.Reconnected += OnConnectionReconnected;
				_connection.Reconnecting += OnConnectionReconnecting;
			}
		}

		public async Task ConnectAsync()
		{
			if (_isConnected || _connection.State == HubConnectionState.Connected || _connection.State == HubConnectionState.Connecting)
				return;

			Logs.DebugLog.WriteMethodStart();

			try
			{
				ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

				await _connection.StartAsync();

				_isConnected = true;
			}
			catch (Exception err)
			{
				Logs.LogError(err);
			}
			Logs.DebugLog.WriteMethodStop();
		}

		public async Task SendMessageAsync(string strTo, Message oMessage)
		{
			try
			{
				if (_connection == null)
					return;

				if (_connection.State != HubConnectionState.Connected)
					await ConnectAsync();

				if (!_isConnected)
					return;

				string strMessage = JsonUtil.ToStringExt(oMessage).ToString();
				await _connection.InvokeAsync("SendMessage", strTo, strMessage);
			}
			catch (System.Exception err)
			{
				Logs.LogError(err);
			}
		}

		private Task OnConnectionReconnecting(System.Exception arg)
		{
			Logs.DebugLog.WriteEvent("FeedingFrenzy.Messaging", "Connection_Reconnecting");
			_isConnected = false;
			return Task.CompletedTask;
		}

		private Task OnConnectionReconnected(string arg)
		{
			Logs.DebugLog.WriteEvent("FeedingFrenzy.Messaging", $"Connection_Reconnected({arg})");
			_isConnected = true;
			return Task.CompletedTask;
		}

		private Task OnConnectionClosed(System.Exception arg)
		{
			Logs.DebugLog.WriteEvent("FeedingFrenzy.Messaging", "Connection_Closed");
			_isConnected = false;
			return Task.CompletedTask;
		}
	}
}
