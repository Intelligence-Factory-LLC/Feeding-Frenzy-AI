using Microsoft.AspNetCore.Mvc;

namespace UBOLD_CORE.Controllers
{
    public class CustomController : Controller
    {
        public CustomController()
        {
        }

        #region Auth Pages
        [ActionName("auth-confirm-mail-2")] public IActionResult AuthConfirmMail2() => View("auth-confirm-mail-2");
        [ActionName("auth-confirm-mail")] public IActionResult AuthConfirmMail() => View("auth-confirm-mail");
        [ActionName("auth-lock-screen-2")] public IActionResult AuthLockScreen2() => View("auth-lock-screen-2");
        [ActionName("auth-lock-screen")] public IActionResult AuthLockScreen() => View("auth-lock-screen");
        [ActionName("auth-login-2")] public IActionResult AuthLogin2() => View("auth-login-2");
        [ActionName("auth-login")] public IActionResult AuthLogin() => View("auth-login");
        [ActionName("auth-logout-2")] public IActionResult AuthLogout2() => View("auth-logout-2");
        [ActionName("auth-logout")] public IActionResult AuthLogout() => View("auth-logout");
        [ActionName("auth-recoverpw-2")] public IActionResult AuthRecoverpw2() => View("auth-recoverpw-2");
        [ActionName("auth-recoverpw")] public IActionResult AuthRecoverpw() => View("auth-recoverpw");
        [ActionName("auth-register-2")] public IActionResult AuthRegister2() => View("auth-register-2");
        [ActionName("auth-register")] public IActionResult AuthRegister() => View("auth-register");
        [ActionName("auth-signin-signup-2")] public IActionResult AuthSigninSignup2() => View("auth-signin-signup-2");
        [ActionName("auth-signin-signup")] public IActionResult AuthSigninSignup() => View("auth-signin-signup");

        #endregion


        #region Extra Pages
        [ActionName("pages-404-alt")] public IActionResult Pages404Alt() => View("pages-404-alt");
        [ActionName("pages-404-two")] public IActionResult Pages404Two() => View("pages-404-two");
        [ActionName("pages-404")] public IActionResult Pages404() => View("pages-404");
        [ActionName("pages-500-two")] public IActionResult Pages500Two() => View("pages-500-two");
        [ActionName("pages-500")] public IActionResult Pages500() => View("pages-500");
        [ActionName("pages-coming-soon")] public IActionResult PagesComingSoon() => View("pages-coming-soon");
        [ActionName("pages-faqs")] public IActionResult PagesFaqs() => View("pages-faqs");
        [ActionName("pages-gallery")] public IActionResult PagesGallery() => View("pages-gallery");
        [ActionName("pages-invoice")] public IActionResult PagesInvoice() => View("pages-invoice");
        [ActionName("pages-maintenance")] public IActionResult PagesMaintenance() => View("pages-maintenance");
        [ActionName("pages-pricing")] public IActionResult PagesPricing() => View("pages-pricing");
        [ActionName("pages-search-results")] public IActionResult PagesSearchResults() => View("pages-search-results");
        [ActionName("pages-sitemap")] public IActionResult PagesSitemap() => View("pages-sitemap");
        [ActionName("pages-starter")] public IActionResult PagesStarter() => View("pages-starter");
        [ActionName("pages-timeline")] public IActionResult PagesTimeline() => View("pages-timeline");

        #endregion


        #region Layouts

        [ActionName("layouts-detached")] public IActionResult LayoutsDetached() => View("layouts-detached");
        [ActionName("layouts-preloader")] public IActionResult LayoutsPreloader() => View("layouts-preloader");
        [ActionName("layouts-two-column")] public IActionResult LayoutsTwoColumn() => View("layouts-two-column");
        [ActionName("layouts-two-tone-icons")] public IActionResult LayoutsTwoToneIcons() => View("layouts-two-tone-icons");
        [ActionName("layouts-vertical")] public IActionResult LayoutsVertical() => View("layouts-vertical");
        #endregion
    }
}