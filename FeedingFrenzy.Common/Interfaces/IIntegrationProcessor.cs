using BasicUtilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FeedingFrenzy.Common
{
    public interface IIntegrationProcessor
    {
        void Initialize(JsonObject jsonData);
        void OnCallCompleted(int iCallID);
    }
}
