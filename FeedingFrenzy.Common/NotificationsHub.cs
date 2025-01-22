using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FeedingFrenzy.Common
{
	[AllowAnonymous]
	public class NotificationsHub : Hub
	{
		// This method is called by the client with InvokeAsync("SendMessage", ...)
		public async Task SendMessage(string to, string message)
		{
			// Decide how you want to deliver the message.
			// For example, to broadcast to *all* connected clients:
			await Clients.All.SendAsync("ReceiveMessage", message);

			// Or to the user who initiated the call:
			// await Clients.Caller.SendAsync("ReceiveMessageToCaller", to, message);

			// Or to a specific user:
			// await Clients.User(to).SendAsync("ReceiveMessage", to, message);
		}

	}
}
