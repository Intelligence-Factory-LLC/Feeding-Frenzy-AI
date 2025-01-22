//using Buffaly.SemanticDB.ServiceGateway;
//using WebAppUtilities;

//namespace FeedingFrenzy.Admin.Business.Services
//{
//    public class FragmentsHelper : JsonWs
//    {
//        private static IFragmentsService? _fragmentsService;

//        /// <summary>
//        /// Initialize the static service instance.
//        /// Should be called during application startup.
//        /// </summary>
//        public static void Initialize(IFragmentsService fragmentsService)
//        {
//            _fragmentsService = fragmentsService ?? throw new ArgumentNullException(nameof(fragmentsService));
//        }

//        private static IFragmentsService Service
//        {
//            get
//            {
//                if (_fragmentsService == null)
//                {
//                    throw new InvalidOperationException("FragmentsHelper is not initialized. Call Initialize during startup.");
//                }
//                return _fragmentsService;
//            }
//        }

//        public static int InsertOrUpdateFragment(string FragmentKey, string Fragment)
//        {
//            return Service.InsertOrUpdateFragment(FragmentKey, Fragment);
//        }

//    }
//}
