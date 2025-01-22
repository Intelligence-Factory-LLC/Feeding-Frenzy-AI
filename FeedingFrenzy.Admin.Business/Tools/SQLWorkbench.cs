using BasicUtilities;
using BasicUtilities.Collections;
using Buffaly.SemanticDB;
using Buffaly.SemanticDB.Data;
using FeedingFrenzy.Admin.Business.ChatAgents;
using RooTrax.Common.DB;
using System.Data;
using System.Text;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.Business.Tools
{
    public class SQLContext
    {
        public string? ConnectionHandle;
        public string? ProjectName;
        public string? ConnectionString;


        public static SQLContext LoadContext(string strConnectionHandle, string strConnectionString, string strCache, bool bForceRefresh = false)
        {
            SQLContext context = new SQLContext();
            context.ConnectionHandle = strConnectionHandle;
            context.ConnectionString = strConnectionString;

            return context;
        }

    }
    public class SQLWorkbench : JsonWs
    {
        protected static Map<string, SQLContext> m_mapContexts = new Map<string, SQLContext>();

        static public SQLContext GetContext(string strContext)
        {
            if (!m_mapContexts.ContainsKey(strContext))
                throw new JsonWsException(strContext + " not loaded");

            return m_mapContexts[strContext];
        }

        static public void ResetContext(string strContext)
        {
            if (m_mapContexts.ContainsKey(strContext))
                m_mapContexts.Remove(strContext);
        }


        static public string SetConnectionHandle(string strConnectionHandle, bool? bForceRefresh)
        {
            string strConnectionString = ConnectionManager.GetConnectionString(strConnectionHandle);
            string strCache = DirectoryUtil.BuildPath(Settings.GetStringOrDefault("SQLWorkbench.CacheRoot", "c:\\temp"), strConnectionHandle);

            SQLContext context = SQLContext.LoadContext(strConnectionHandle, strConnectionString, strCache, bForceRefresh ?? false);
            m_mapContexts[strConnectionHandle] = context;
            return strConnectionHandle;
        }

        static public void SetConnectionString(string strConnectionHandle, string strConnectionString)
        {
            SQLContext context = GetContext(strConnectionHandle);
            context.ConnectionString = strConnectionString;
        }

        static public string SetProjectName(string strConnectionHandle, string strProjectName)
        {
            SQLContext context = GetContext(strConnectionHandle);
            context.ProjectName = strProjectName;
            return strConnectionHandle;
        }

        public class ExecuteQueryResults
        {
            public int NumRows = 0;
            public double Time = 0.0;
            public string? Table;
            public List<string> Columns = new List<string>();
        }

        static public ExecuteQueryResults ExecuteQuery(string strContext, string strQuery)
        {
            try
            {
                Logs.DebugLog.WriteEvent("Executing", strQuery);
                Logs.DebugLog.WriteEvent("On", strContext);

               string strConnectionString = ConnectionManager.GetConnectionString("feedingfrenzy.readwrite");

				return ExecuteQuery2(strQuery, strConnectionString);
            }
            catch (Exception err)
            {
                throw new JsonWsException(err.Message);
            }
        }
        static public ExecuteQueryResults ExecuteQuery2(string strQuery, string strConnectionString)
        {
            try
            {
                ExecuteQueryResults results = new ExecuteQueryResults();

                BasicUtilities.Timer timer = new BasicUtilities.Timer();
                timer.Start();
                DataSet ds = DBUtilities.DataSetFromQuery(strQuery, strConnectionString);
                timer.Stop();
                results.Time = timer.Elapsed;

                if (ds.Tables.Count == 0)
                    results.NumRows = 0;
                else
                    results.NumRows = ds.Tables[0].Rows.Count;

                StringBuilder sb = new StringBuilder();
                sb = JsonUtil.GetTableAsJson(ds.Tables[0].DefaultView);

                foreach (DataColumn col in ds.Tables[0].Columns)
                {
                    results.Columns.Add(col.ColumnName);
                }

                results.Table = sb.ToString();
                return results;
            }
            catch (Exception err)
            {
                throw new JsonWsException(err.Message);
            }
        }

        static public void Reset(string strApplication)
        {
			FeedingFrenzyAgent.Reset();
        }

        static public JsonObject InterpretDirective(string strContext, string strPrompt, string strDirective)
        {
            return FeedingFrenzyAgent.ProcessDirective(strContext, strDirective);
        }

        static public JsonObject ContinueDirective(string strRequestKey, string Directive, JsonObject jsonValues)
        {
            return FeedingFrenzyAgent.ContinueDirective(strRequestKey, Directive, jsonValues);
        }

        static public async Task SaveDirectiveAndSQL(string Directive, string SQL)
        {
            FragmentsRow rowDirective = Fragments.GetOrInsertFragment(Directive);
            FragmentTags.InsertOrUpdateFragmentTag(rowDirective.FragmentID, "Directive - Example Fulfillments");
            await Embeddings.GetOrCalculateEmbeddingVectorByFragmentID(rowDirective.FragmentID);

            FragmentsRow rowSQL = Fragments.GetOrInsertFragment(SQL);
            FragmentTags.InsertOrUpdateFragmentTag(rowSQL.FragmentID, "SQL Query");
            rowSQL.ParentFragmentID = rowDirective.FragmentID;
            FragmentsRepository.UpdateFragment(rowSQL);
        }

        public class SavedQuery
        {
            public string QueryName;
            public string Query;
            public string RowProcessor;
        }

        public static void SaveQuery(string strContext, SavedQuery Query)
        {
            string strJson = JsonUtil.ToString(Query).ToString();

            string strRoot = Settings.GetStringOrDefault("SQLWorkbench.Queries", "c:\\dev\\queries");
            string strFile = FileUtil.BuildPath(DirectoryUtil.BuildPath(strRoot, strContext), Query.QueryName, ".json");
            FileUtil.WriteFile(strFile, strJson);
        }

        public static List<SavedQuery> LoadSavedQueries(string strContext)
        {
            List<SavedQuery> lstSavedQueries = new List<SavedQuery>();
            string strRoot = Settings.GetStringOrDefault("SQLWorkbench.Queries", "c:\\dev\\queries");

            string strDirectory = DirectoryUtil.BuildPath(strRoot, strContext);
            if (System.IO.Directory.Exists(strDirectory))
            {
                foreach (string strFile in System.IO.Directory.GetFiles(strDirectory, "*.json"))
                {
                    string strJson = FileUtil.ReadFile(strFile);
                    SavedQuery query = JsonUtil.ConvertTo<SavedQuery>(strJson);
                    lstSavedQueries.Add(query);
                }
            }

            return lstSavedQueries;
        }
    }

}
