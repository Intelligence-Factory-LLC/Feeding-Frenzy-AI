using BasicUtilities;
using FeedingFrenzy.Features;

namespace FeedingFrenzy.Admin.Pages.Shared
{
    public class _TopBarModel
    {
        private HttpContext _httpContext => new HttpContextAccessor().HttpContext;

        public string Logo
        {
            get
            {
                return StringUtil.IsEmpty(OrganizationFeature.Feature.LogoUrl) ? "/images/if_logo.png" : OrganizationFeature.Feature.LogoUrl;
            }
        }

        public string? UserName
        {
            get
            {
                return new FeedingFrenzy.Admin.Business.API.UserState(_httpContext).UserName;
            }
        }

        public int? SalesRepresentativeID
        {
            get
            {
                return new FeedingFrenzy.Admin.Business.API.UserState(_httpContext).SalesRepresentativeID;
            }
        }

        public string? RoleName
        {
            get
            {
                return new FeedingFrenzy.Admin.Business.API.UserState(_httpContext).User.UserRoles[0].Role.RoleName;
            }
        }

        public bool IsAgentChatEnabled
        {
            get
            {
                return OrganizationFeature.Feature.IsAgentChatEnabled;
            }
        }
    }
}
