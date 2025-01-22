using BasicUtilities;
using Microsoft.AspNetCore.Http;
using RooTrax.Logging;
using System.Linq;
using Messages = FeedingFrenzy.Messaging.Messages;

namespace FeedingFrenzy.Admin.Business
{
	public class LoggingWorkbench : RooTrax.Logging.LoggingWorkbench
	{
		private IHttpContextAccessor _httpContextAccessor;
		private FeedingFrenzy.Messaging.Messages _messages;

		public LoggingWorkbench(IHttpContextAccessor httpContextAccessor)
		{
			_httpContextAccessor = httpContextAccessor;
			_messages = new FeedingFrenzy.Messaging.Messages(_httpContextAccessor);
			InitializeWatcher();
		}

		private readonly Dictionary<string, DateTime> _lastFileChangeSent = new Dictionary<string, DateTime>();
		private readonly int ThrottleSeconds = 2; // or whatever time window you want

		private void InitializeWatcher()
		{
			OnWatcherCreated += (watcher) =>
			{
				watcher.OnLogFileChanged += (filePath, newLines) =>
				{
					// Check if we have a last-send time for this file
					if (_lastFileChangeSent.TryGetValue(filePath, out var lastTime))
					{
						// If it's been less than ThrottleSeconds, skip
						if ((DateTime.UtcNow - lastTime).TotalSeconds < ThrottleSeconds)
							return;
					}

					newLines = newLines.Where(x => !StringUtil.InString(x.Event, "LoggingWorkbench")).ToList();
					if (newLines.Count == 0)
						return;

					// Otherwise, send the message and update the time
					var msg = new FeedingFrenzy.Messaging.Messages.Message
					{
						To = "All",
						MessageType = "LogFileChanged",
						Title = $"File changed: {filePath}",
						// Payload omitted to reduce spamming
					};

					_messages.SendMessageAsync("All", msg);

					_lastFileChangeSent[filePath] = DateTime.UtcNow;
				};

				watcher.OnLogFileAdded += (filePath) =>
				{
					var msg = new FeedingFrenzy.Messaging.Messages.Message
					{
						To = "All",
						MessageType = "LogFileAdded",
						Title = $"File added: {filePath}",
						Payload = filePath
					};
					_messages.SendMessageAsync("All", msg);
				};

				watcher.OnLogFileRemoved += (filePath) =>
				{
					var msg = new FeedingFrenzy.Messaging.Messages.Message
					{
						To = "All",
						MessageType = "LogFileRemoved",
						Title = $"File removed: {filePath}",
						Payload = filePath
					};
					_messages.SendMessageAsync("All", msg);
				};
			};
		}

	}
}