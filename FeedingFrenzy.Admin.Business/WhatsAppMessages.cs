using FeedingFrenzy.WhatsApp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.Business
{
	public partial class WhatsAppMessages : JsonWs
	{
		public static bool IsWhatsEnable()
		{
			WhatsAppFeature feature = WhatsAppFeature.Feature;
			return feature.IsEnable;
		}
	}
}
