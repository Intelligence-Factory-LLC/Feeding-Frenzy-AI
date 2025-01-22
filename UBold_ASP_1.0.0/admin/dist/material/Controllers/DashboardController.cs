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

        [Route("Dashboard1")]
        public IActionResult Dashboard1()
        {
            return View();
        }

        [Route("Dashboard2")]
        public IActionResult Dashboard2()
        {
            return View();
        }
        [Route("Dashboard3")]
        public IActionResult Dashboard3()
        {
            return View();
        }
        [Route("Dashboard4")]
        public IActionResult Dashboard4()
        {
            return View();
        }
    }
}