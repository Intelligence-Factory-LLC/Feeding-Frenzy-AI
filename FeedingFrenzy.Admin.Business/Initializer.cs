using BasicUtilities;
using FeedingFrenzy.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FeedingFrenzy.Admin.Business
{
	static public class Initializer
	{
		static public void Initialize()
		{
			Logs.DebugLog.MaxLinesPerFile = 0;
			SalesRepresentativeTypesRepository.IsCachingEnabled = true;
			LeadStatusesRepository.IsCachingEnabled = true;
			SourcesRepository.IsCachingEnabled = true;
			LeadSubStatusesRepository.IsCachingEnabled = true;
			CampaignsRepository.IsCachingEnabled = true;
			TagsRepository.IsCachingEnabled = true;
			AreaCodesRepository.IsCachingEnabled = true;
			LeadNoteTypesRepository.IsCachingEnabled = true;
			ContentsRepository.IsCachingEnabled = true;
			FeaturesRepository.IsCachingEnabled = true;

			//Use this serializer to prevent ToJSON from calling lazy loaded properties
			JsonSerializers.RegisterSerializer(typeof(RooTrax.Common.DB.BasicRow), new RooTrax.Common.DB.BasicRowJSONSerializer());
		}

		static public void ResetCache()
		{
			SalesRepresentativeTypesRepository.Cache.Clear();
			LeadStatusesRepository.Cache.Clear();
			SourcesRepository.Cache.Clear();
			LeadSubStatusesRepository.Cache.Clear();
			CampaignsRepository.Cache.Clear();
			TagsRepository.Cache.Clear();
			AreaCodesRepository.Cache.Clear();
			LeadNoteTypesRepository.Cache.Clear();
			ContentsRepository.Cache.Clear();
			FeaturesRepository.Cache.Clear();

        }
	}
}
