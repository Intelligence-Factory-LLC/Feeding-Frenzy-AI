using Microsoft.AspNetCore.Mvc;

namespace UBOLD_CORE.Controllers
{
    [Route("")]
    public class DashboardController : Controller
    {
        public DashboardController()
        {
        }

        public IActionResult Index()
        {
            return View();
        }

        [Route("dashboard-2")] public IActionResult Dashboard2() => View("dashboard-2");
        [Route("dashboard-3")] public IActionResult Dashboard3() => View("dashboard-3");
        [Route("dashboard-4")] public IActionResult Dashboard4() => View("dashboard-4");
    }
}