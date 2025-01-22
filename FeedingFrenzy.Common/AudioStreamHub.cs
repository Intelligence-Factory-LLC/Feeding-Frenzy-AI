using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FeedingFrenzy.Common
{
    public class AudioStream : Hub
    {
        private static readonly Dictionary<string, string> _connections = new Dictionary<string, string>();

        // Static method to add a connection using the Caller ID as the User ID
        public static void AddConnection(string userId, string connectionId)
        {
            if (!_connections.ContainsKey(userId))
            {
                _connections.Add(userId, connectionId);
            }
            else
            {
                _connections[userId] = connectionId;
            }
        }

        // Static method to get a connection ID using the Caller ID
        public static string? GetConnection(string userId)
        {
            return _connections.TryGetValue(userId, out var connectionId) ? connectionId : null;
        }

        // Method to be called by the client to register the Caller ID
        public async Task RegisterCallerId(string callerId)
        {
            string connectionId = Context.ConnectionId;
            AddConnection(callerId, connectionId);
            await Task.CompletedTask;
        }
    }
}
