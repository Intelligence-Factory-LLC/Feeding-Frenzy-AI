using Microsoft.AspNetCore.Mvc;

namespace UBOLD_CORE.Controllers
{
    public class ComponentController : Controller
    {
        public ComponentController()
        {
        }

        [ActionName("charts-apex")] public IActionResult chartsapex() => View("charts-apex");
        [ActionName("charts-c3")] public IActionResult chartsc3() => View("charts-c3");
        [ActionName("charts-chartist")] public IActionResult chartschartist() => View("charts-chartist");
        [ActionName("charts-chartjs")] public IActionResult chartschartjs() => View("charts-chartjs");
        [ActionName("charts-flot")] public IActionResult chartsflot() => View("charts-flot");
        [ActionName("charts-knob")] public IActionResult chartsknob() => View("charts-knob");
        [ActionName("charts-morris")] public IActionResult chartsmorris() => View("charts-morris");
        [ActionName("charts-peity")] public IActionResult chartspeity() => View("charts-peity");
        [ActionName("charts-sparklines")] public IActionResult chartssparklines() => View("charts-sparklines");
        [ActionName("forms-advanced")] public IActionResult formsadvanced() => View("forms-advanced");
        [ActionName("forms-elements")] public IActionResult formselements() => View("forms-elements");
        [ActionName("forms-file-uploads")] public IActionResult formsfileuploads() => View("forms-file-uploads");
        [ActionName("forms-image-crop")] public IActionResult formsimagecrop() => View("forms-image-crop");
        [ActionName("forms-masks")] public IActionResult formsmasks() => View("forms-masks");
        [ActionName("forms-pickers")] public IActionResult formspickers() => View("forms-pickers");
        [ActionName("forms-quilljs")] public IActionResult formsquilljs() => View("forms-quilljs");
        [ActionName("forms-validation")] public IActionResult formsvalidation() => View("forms-validation");
        [ActionName("forms-wizard")] public IActionResult formswizard() => View("forms-wizard");
        [ActionName("forms-x-editable")] public IActionResult formsxeditable() => View("forms-x-editable");
        [ActionName("icons-dripicons")] public IActionResult iconsdripicons() => View("icons-dripicons");
        [ActionName("icons-feather")] public IActionResult iconsfeather() => View("icons-feather");
        [ActionName("icons-font-awesome")] public IActionResult iconsfontawesome() => View("icons-font-awesome");
        [ActionName("icons-material-symbols")] public IActionResult iconsmaterialsymbols() => View("icons-material-symbols");
        [ActionName("icons-mdi")] public IActionResult iconsmdi() => View("icons-mdi");
        [ActionName("icons-simple-line")] public IActionResult iconssimpleline() => View("icons-simple-line");
        [ActionName("icons-themify")] public IActionResult iconsthemify() => View("icons-themify");
        [ActionName("icons-two-tone")] public IActionResult iconstwotone() => View("icons-two-tone");
        [ActionName("icons-weather")] public IActionResult iconsweather() => View("icons-weather");
        [ActionName("maps-google")] public IActionResult mapsgoogle() => View("maps-google");
        [ActionName("maps-mapael")] public IActionResult mapsmapael() => View("maps-mapael");
        [ActionName("maps-vector")] public IActionResult mapsvector() => View("maps-vector");
        [ActionName("tables-basic")] public IActionResult tablesbasic() => View("tables-basic");
        [ActionName("tables-bootstrap")] public IActionResult tablesbootstrap() => View("tables-bootstrap");
        [ActionName("tables-datatables")] public IActionResult tablesdatatables() => View("tables-datatables");
        [ActionName("tables-editable")] public IActionResult tableseditable() => View("tables-editable");
        [ActionName("tables-footables")] public IActionResult tablesfootables() => View("tables-footables");
        [ActionName("tables-jsgrid")] public IActionResult tablesjsgrid() => View("tables-jsgrid");
        [ActionName("tables-responsive")] public IActionResult tablesresponsive() => View("tables-responsive");
        [ActionName("tables-tablesaw")] public IActionResult tablestablesaw() => View("tables-tablesaw");
        [ActionName("ui-avatars")] public IActionResult uiavatars() => View("ui-avatars");
        [ActionName("ui-buttons")] public IActionResult uibuttons() => View("ui-buttons");
        [ActionName("ui-cards")] public IActionResult uicards() => View("ui-cards");
        [ActionName("ui-carousel")] public IActionResult uicarousel() => View("ui-carousel");
        [ActionName("ui-dropdowns")] public IActionResult uidropdowns() => View("ui-dropdowns");
        [ActionName("ui-general")] public IActionResult uigeneral() => View("ui-general");
        [ActionName("ui-grid")] public IActionResult uigrid() => View("ui-grid");
        [ActionName("ui-images")] public IActionResult uiimages() => View("ui-images");
        [ActionName("ui-list-group")] public IActionResult uilistgroup() => View("ui-list-group");
        [ActionName("ui-modals")] public IActionResult uimodals() => View("ui-modals");
        [ActionName("ui-notifications")] public IActionResult uinotifications() => View("ui-notifications");
        [ActionName("ui-offcanvas")] public IActionResult uioffcanvas() => View("ui-offcanvas");
        [ActionName("ui-placeholders")] public IActionResult uiplaceholders() => View("ui-placeholders");
        [ActionName("ui-portlets")] public IActionResult uiportlets() => View("ui-portlets");
        [ActionName("ui-progress")] public IActionResult uiprogress() => View("ui-progress");
        [ActionName("ui-ribbons")] public IActionResult uiribbons() => View("ui-ribbons");
        [ActionName("ui-spinners")] public IActionResult uispinners() => View("ui-spinners");
        [ActionName("ui-tabs-accordions")] public IActionResult uitabsaccordions() => View("ui-tabs-accordions");
        [ActionName("ui-tooltips-popovers")] public IActionResult uitooltipspopovers() => View("ui-tooltips-popovers");
        [ActionName("ui-typography")] public IActionResult uitypography() => View("ui-typography");
        [ActionName("ui-video")] public IActionResult uivideo() => View("ui-video");
        [ActionName("widgets")] public IActionResult Widgets() => View("widgets");

        [ActionName("extended-animation")] public IActionResult extendedanimation() => View("extended-animation");
        [ActionName("extended-dragula")] public IActionResult extendeddragula() => View("extended-dragula");
        [ActionName("extended-loading-buttons")] public IActionResult extendedloadingbuttons() => View("extended-loading-buttons");
        [ActionName("extended-nestable")] public IActionResult extendednestable() => View("extended-nestable");
        [ActionName("extended-range-slider")] public IActionResult extendedrangeslider() => View("extended-range-slider");
        [ActionName("extended-scrollspy")] public IActionResult extendedscrollspy() => View("extended-scrollspy");
        [ActionName("extended-sweet-alert")] public IActionResult extendedsweetalert() => View("extended-sweet-alert");
        [ActionName("extended-tour")] public IActionResult extendedtour() => View("extended-tour");
    }
}