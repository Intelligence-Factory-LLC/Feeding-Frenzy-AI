using RooTrax.Cache;
using RooTrax.Common;

namespace FeedingFrenzy.Data
{
    public partial class LeadNoteTypesCache
    {
        private static RowCache? m_cache = null;
        public static RowCache Cache
        {
            get
            {
                if (null == m_cache)
                    m_cache = CacheManager.Instance.GetOrCreateCache("LeadNoteTypes");

                return m_cache;
            }
        }

        public static LeadNoteTypesRow Get(int LeadNoteTypeID)
        {
            LeadNoteTypesRow? rowLeadNoteType = Cache.Get<LeadNoteTypesRow>(LeadNoteTypeID);

            if (null == rowLeadNoteType)
            {
                rowLeadNoteType = LeadNoteTypesRepository.Get(LeadNoteTypeID);

                if (null == rowLeadNoteType)
                    throw new Exception("Invalid LeadNoteTypeID: " + LeadNoteTypeID);

                Cache.Insert(rowLeadNoteType, rowLeadNoteType.LeadNoteTypeID, rowLeadNoteType.LeadNoteTypeName);
            }

            return rowLeadNoteType;
        }

        public static LeadNoteTypesRow Get(string LeadNoteTypeName)
        {
            LeadNoteTypesRow? rowLeadNoteType = Cache.Get<LeadNoteTypesRow>(LeadNoteTypeName);

            if (null == rowLeadNoteType)
            {
                rowLeadNoteType = LeadNoteTypesRepository.GetLeadNoteTypeByLeadNoteTypeName(LeadNoteTypeName);

                if (null == rowLeadNoteType)
                    throw new Exception("Invalid LeadNoteTypeName: " + LeadNoteTypeName);

                Cache.Insert(rowLeadNoteType, rowLeadNoteType.LeadNoteTypeID, rowLeadNoteType.LeadNoteTypeName);
            }

            return rowLeadNoteType;
        }
    }

    public partial class LeadNoteTypesEnum
    {

        private static LeadNoteTypesRow? m_rowEmail = null;
        public static LeadNoteTypesRow Email
        {
            get
            {
                if (null == m_rowEmail)
                    m_rowEmail = LeadNoteTypesCache.Get("Email");

                if (null == m_rowEmail)
                    throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Email lookup value");

                return m_rowEmail;
            }
        }

        private static LeadNoteTypesRow? m_rowPhoneCallIn = null;
        public static LeadNoteTypesRow PhoneCallIn
        {
            get
            {
                if (null == m_rowPhoneCallIn)
                    m_rowPhoneCallIn = LeadNoteTypesCache.Get("Phone Call In");

                if (null == m_rowPhoneCallIn)
                    throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Phone Call In lookup value");

                return m_rowPhoneCallIn;
            }
        }

        private static LeadNoteTypesRow? m_rowAutomated = null;
        public static LeadNoteTypesRow Automated
        {
            get
            {
                if (null == m_rowAutomated)
                    m_rowAutomated = LeadNoteTypesCache.Get("Automated");

                if (null == m_rowAutomated)
                    throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Automated lookup value");

                return m_rowAutomated;
            }
        }

        private static LeadNoteTypesRow? m_rowCall = null;
        public static LeadNoteTypesRow Call
        {
            get
            {
                if (null == m_rowCall)
                    m_rowCall = LeadNoteTypesCache.Get("Call");

                if (null == m_rowCall)
                    throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing  Call lookup value");

                return m_rowCall;
            }
        }

        private static LeadNoteTypesRow? m_rowAppointmentSet = null;
        public static LeadNoteTypesRow AppointmentSet
        {
            get
            {
                if (null == m_rowAppointmentSet)
                    m_rowAppointmentSet = LeadNoteTypesCache.Get("Appointment Set");

                if (null == m_rowAppointmentSet)
                    throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Appointment Set lookup value");

                return m_rowAppointmentSet;
            }
        }

        private static LeadNoteTypesRow? m_rowPresented = null;
        public static LeadNoteTypesRow Presented
        {
            get
            {
                if (null == m_rowPresented)
                    m_rowPresented = LeadNoteTypesCache.Get("Presented");

                if (null == m_rowPresented)
                    throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing Presented lookup value");

                return m_rowPresented;
            }
        }

        private static LeadNoteTypesRow? m_rowGoogleDocFile = null;
        public static LeadNoteTypesRow GoogleDocFile
        {
            get
            {
                if (null == m_rowGoogleDocFile)
                    m_rowGoogleDocFile = LeadNoteTypesCache.Get("Google Docs");

                if (null == m_rowGoogleDocFile)
                    throw new ExpectedLookupTableRowMissingException("Configuration Error, Missing GoogleDoc File Set lookup value");

                return m_rowGoogleDocFile;
            }
        }


    }
}
