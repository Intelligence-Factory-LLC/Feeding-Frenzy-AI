using BasicUtilities;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Primitives;
using Microsoft.AspNetCore.Http;
using FeedingFrenzy.Admin.Business.API;
using FeedingFrenzy.Data;
using FeedingFrenzy.Admin.UI;
using System.Text;

namespace FeedingFrenzy.Admin
{
    public class BaseModel : PageModel
    {
        protected UserState UserState => new UserState(HttpContext);
        protected ISession Session => HttpContext.Session;
        protected string? GetStringOrNull(string strKey)
        {
            string? strResult = null;

            try
            {
                StringValues sv = Request.Query[strKey];

                if (sv.Count == 0)
                    sv = Request.Form[strKey];

                if (sv.Count > 0)
                    strResult = sv[0];
            }
            catch
            {
                //Ignore
            }

            return strResult;
        }

        protected bool GetBooleanOrFalse(string strKey)
        {
            string? strValue = GetStringOrNull(strKey);
            if (StringUtil.IsEmpty(strValue))
                return false;

            return ConvUtilities.BoolFromObject(strValue!, false);
        }

        protected int? GetIntegerOrNull(string strKey)
        {
            string? strValue = GetStringOrNull(strKey);
            if (StringUtil.IsEmpty(strValue) || StringUtil.EqualNoCase(strValue, "null"))
                return null;

            return ConvUtilities.IntFromObject(strValue!);
        }

        protected double? GetDoubleOrNull(string strKey)
        {
            string? strValue = GetStringOrNull(strKey);
            if (StringUtil.IsEmpty(strValue))
                return null;

            return (double)ConvUtilities.DecimalFromObject(strValue!);
        }

        public string GetSidebarMenu(kScript3.kScriptControl oHandler)
        {
            oHandler.EvaluateFunction1("using", "SalesRepresentatives\\LeftMenu.ks.html");
            oHandler.EvaluateFunction1("using", "Administrator\\LeftMenu.ks.html");

            if (UserState.HasRole(RolesEnum.Administrator.RoleID))
                return oHandler.EvaluateFunctionNObjects("GetAdministratorLeftMenu", new List<object> { UserState });

            return oHandler.EvaluateFunctionNObjects("GetSalesRepresentativeLeftMenu", new List<object> { UserState });
        }

        public string? SidebarMenu
        {
            get
            {
                return GetSidebarMenu(RooTraxState.kScriptControl);
            }
        }

        public string SerializeRequestQueryAndForm()
        {
            HttpRequest request = HttpContext.Request;
            StringBuilder sb = new StringBuilder();

            // Serialize Query Parameters
            sb.AppendLine("Query Parameters:");
            foreach (var key in request.Query.Keys)
            {
                StringValues values = request.Query[key];
                string serializedValues = SerializeStringValues(values);
                sb.AppendLine($"  {key}: {serializedValues}");
            }

            // Serialize Form Parameters (only if content type is form)
            if (request.HasFormContentType)
            {
                sb.AppendLine("Form Parameters:");
                foreach (var key in request.Form.Keys)
                {
                    StringValues values = request.Form[key];
                    string serializedValues = SerializeStringValues(values);
                    sb.AppendLine($"  {key}: {serializedValues}");
                }
            }

            return sb.ToString();
        }

        private static string SerializeStringValues(StringValues values)
        {
            if (values.Count == 0)
            {
                return "(no values)";
            }
            else if (values.Count == 1)
            {
                return values[0];
            }
            else
            {
                return string.Join(", ", values);
            }
        }
    }
}
