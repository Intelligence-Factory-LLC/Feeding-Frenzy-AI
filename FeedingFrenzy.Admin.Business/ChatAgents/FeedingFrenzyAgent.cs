using BasicUtilities;
using Buffaly.SemanticDB;
using FeedingFrenzy.Admin.Business.API;
using FeedingFrenzy.Data;
using Microsoft.AspNetCore.Http;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.Business.ChatAgents
{
	public class FeedingFrenzyAgent : JsonWs
	{
		private static IHttpContextAccessor _httpContextAccessor;

		public FeedingFrenzyAgent(IHttpContextAccessor httpContextAccessor)
		{
			_httpContextAccessor = httpContextAccessor;
			Ontology.Services.Remote.FeedingFrenzyAgent.Url = BasicUtilities.Settings.GetString("Ontology.Services.Remote.Url");
		}
		static public void Reset()
		{
		}

		static public JsonObject ProcessDirective(string strContext, string strDirective)
		{
			JsonObject jsonResult;
			try
			{
				UserState userState = new UserState(_httpContextAccessor.HttpContext);
				JsonObject jsonRequest = new JsonObject();
				if (userState.IsSalesRepresentative)
				{
					jsonRequest["SalesRepresentativeID"] = userState.SalesRepresentativeID;
				}

				jsonResult = Ontology.Services.Remote.FeedingFrenzyAgent.ProcessDirectiveSync(strContext, strDirective, jsonRequest);
				if ("SQL" == jsonResult.GetStringOrNull("ResultType"))
				{
					string strGeneratedSQL = jsonResult.GetStringOrNull("GeneratedSQL");

					var res = SQLWorkbench.ExecuteQuery2(strGeneratedSQL, DataAccess.GetConnectionString());

					jsonResult["Data"] = new JsonValue(res);
				}
				else if ("StoredProcedure" == jsonResult.GetStringOrNull("ResultType"))
				{
					string strGeneratedSQL = jsonResult.GetStringOrNull("GeneratedCall");

					var res = SQLWorkbench.ExecuteQuery2(strGeneratedSQL, DataAccess.GetConnectionString());

					jsonResult["GeneratedSQL"] = strGeneratedSQL;
					jsonResult["Data"] = new JsonValue(res);
					jsonResult["ResultType"] = "SQL";
				}
			}

			catch (Exception ex)
			{
				// Return an error object instead of letting it throw a 500
				jsonResult = new JsonObject
				{
					["ResultType"] = "Error",
					["ErrorMessage"] = ex.Message
				};
			}
			return jsonResult;
		}

		static public JsonObject ContinueDirective(string strRequestKey, string Directive, JsonObject jsonValues)
		{
			return Ontology.Services.Remote.FeedingFrenzyAgent.ContinueDirectiveSync(strRequestKey, Directive, jsonValues);
		}

		static public string InsertObject(string strObjectName, int iObjectID)
		{
			return Ontology.Services.Remote.FeedingFrenzyAgent.InsertObject(strObjectName, iObjectID);
		}

		static public string InsertEntity(string strEntity, string strParent, string strRelated)
		{
			return Ontology.Services.Remote.FeedingFrenzyAgent.InsertEntity(strEntity, strParent, strRelated);
		}
		static public string InsertGoogleDocumentEntity(string strDocumentTitle, string strDocumentID, string strRelated)
		{
			return Ontology.Services.Remote.FeedingFrenzyAgent.InsertGoogleDocumentEntity(strDocumentTitle, strDocumentID, strRelated);
		}
	}
}
