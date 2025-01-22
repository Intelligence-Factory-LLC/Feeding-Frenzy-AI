using Microsoft.AspNetCore.Mvc;

namespace UBOLD_CORE.Controllers
{
    public class CustomController : Controller
    {
        public CustomController()
        {
        }

        #region Auth Pages
        [ActionName("auth-login")]
        public IActionResult Login() => View("auth-login");

        [ActionName("auth-login-2")]
        public IActionResult Login2() => View("auth-login-2");

        [ActionName("auth-register")]
        public IActionResult Register() => View("auth-register");

        [ActionName("auth-register-2")]
        public IActionResult Register2() => View("auth-register-2");

        [ActionName("auth-signin-signup")]
        public IActionResult SigninSignup() => View("auth-signin-signup");

        [ActionName("auth-signin-signup-2")]
        public IActionResult SigninSignup2() => View("auth-signin-signup-2");

        [ActionName("auth-recoverpw")]
        public IActionResult Recoverpw() => View("auth-recoverpw");

        [ActionName("auth-recoverpw-2")]
        public IActionResult Recoverpw2() => View("auth-recoverpw-2");

        [ActionName("auth-lock-screen")]
        public IActionResult LockScreen() => View("auth-lock-screen");

        [ActionName("auth-lock-screen-2")]
        public IActionResult LockScreen2() => View("auth-lock-screen-2");

        [ActionName("auth-logout")]
        public IActionResult Logout() => View("auth-logout");

        [ActionName("auth-logout-2")]
        public IActionResult Logout2() => View("auth-logout-2");

        [ActionName("auth-confirm-mail")]
        public IActionResult ConfirmEmail() => View("auth-confirm-mail");

        [ActionName("auth-confirm-mail-2")]
        public IActionResult ConfirmEmail2() => View("auth-confirm-mail-2");
        #endregion


        #region Extra Pages
        [ActionName("pages-starter")]
        public IActionResult pagesStarter() => View("pages-starter");

        [ActionName("pages-timeline")]
        public IActionResult timeline() => View("pages-timeline");

        [ActionName("pages-sitemap")]
        public IActionResult sitemap() => View("pages-sitemap");

        [ActionName("pages-invoice")]
        public IActionResult invoice() => View("pages-invoice");

        [ActionName("pages-faqs")]
        public IActionResult faqs() => View("pages-faqs");

        [ActionName("pages-search-results")]
        public IActionResult search() => View("pages-search-results");

        [ActionName("pages-pricing")]
        public IActionResult pricing() => View("pages-pricing");

        [ActionName("pages-maintenance")]
        public IActionResult maintenance() => View("pages-maintenance");

        [ActionName("pages-coming-soon")]
        public IActionResult comingsoon() => View("pages-coming-soon");

        [ActionName("pages-gallery")]
        public IActionResult gallery() => View("pages-gallery");

        [ActionName("pages-404")]
        public IActionResult Notfound() => View("pages-404");

        [ActionName("pages-404-two")]
        public IActionResult Notfound2() => View("pages-404-two");

        [ActionName("pages-404-alt")]
        public IActionResult NotfoundAlt() => View("pages-404-alt");

        [ActionName("pages-500")]
        public IActionResult InternalError() => View("pages-500");

        [ActionName("pages-500-two")]
        public IActionResult InternalError2() => View("pages-500-two");

        #endregion

        #region Layouts

        [ActionName("layouts-horizontal")]
        public IActionResult horizontal() => View("layouts-horizontal");

        [ActionName("layouts-detached")]
        public IActionResult detached() => View("layouts-detached");

        [ActionName("layouts-two-column")]
        public IActionResult twocolumn() => View("layouts-two-column");

        [ActionName("layouts-two-tone-icons")]
        public IActionResult twotoneicons() => View("layouts-two-tone-icons");

        [ActionName("layouts-preloader")]
        public IActionResult preloader() => View("layouts-preloader");
        #endregion
    }
}