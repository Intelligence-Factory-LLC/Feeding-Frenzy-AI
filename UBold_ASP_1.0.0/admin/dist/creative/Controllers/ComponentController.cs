using Microsoft.AspNetCore.Mvc;

namespace UBOLD_CORE.Controllers
{
    public class ComponentController : Controller
    {
        public ComponentController()
        {
        }

        [ActionName("charts-apex")] public IActionResult ChartsApex() => View("charts-apex");
        [ActionName("charts-c3")] public IActionResult ChartsC3() => View("charts-c3");
        [ActionName("charts-chartist")] public IActionResult ChartsChartist() => View("charts-chartist");
        [ActionName("charts-chartjs")] public IActionResult ChartsChartjs() => View("charts-chartjs");
        [ActionName("charts-flot")] public IActionResult ChartsFlot() => View("charts-flot");
        [ActionName("charts-knob")] public IActionResult ChartsKnob() => View("charts-knob");
        [ActionName("charts-morris")] public IActionResult ChartsMorris() => View("charts-morris");
        [ActionName("charts-peity")] public IActionResult ChartsPeity() => View("charts-peity");
        [ActionName("charts-sparklines")] public IActionResult ChartsSparklines() => View("charts-sparklines");


        [ActionName("forms-advanced")] public IActionResult FormsAdvanced() => View("forms-advanced");
        [ActionName("forms-elements")] public IActionResult FormsElements() => View("forms-elements");
        [ActionName("forms-file-uploads")] public IActionResult FormsFileUploads() => View("forms-file-uploads");
        [ActionName("forms-image-crop")] public IActionResult FormsImageCrop() => View("forms-image-crop");
        [ActionName("forms-masks")] public IActionResult FormsMasks() => View("forms-masks");
        [ActionName("forms-pickers")] public IActionResult FormsPickers() => View("forms-pickers");
        [ActionName("forms-quilljs")] public IActionResult FormsQuilljs() => View("forms-quilljs");
        [ActionName("forms-validation")] public IActionResult FormsValidation() => View("forms-validation");
        [ActionName("forms-wizard")] public IActionResult FormsWizard() => View("forms-wizard");
        [ActionName("forms-x-editable")] public IActionResult FormsXEditable() => View("forms-x-editable");


        [ActionName("icons-dripicons")] public IActionResult IconsDripicons() => View("icons-dripicons");
        [ActionName("icons-feather")] public IActionResult IconsFeather() => View("icons-feather");
        [ActionName("icons-font-awesome")] public IActionResult IconsFontAwesome() => View("icons-font-awesome");
        [ActionName("icons-material-symbols")] public IActionResult IconsMaterialSymbols() => View("icons-material-symbols");
        [ActionName("icons-mdi")] public IActionResult IconsMdi() => View("icons-mdi");
        [ActionName("icons-simple-line")] public IActionResult IconsSimpleLine() => View("icons-simple-line");
        [ActionName("icons-themify")] public IActionResult IconsThemify() => View("icons-themify");
        [ActionName("icons-two-tone")] public IActionResult IconsTwoTone() => View("icons-two-tone");
        [ActionName("icons-weather")] public IActionResult IconsWeather() => View("icons-weather");



        [ActionName("maps-google")] public IActionResult MapsGoogle() => View("maps-google");
        [ActionName("maps-mapael")] public IActionResult MapsMapael() => View("maps-mapael");
        [ActionName("maps-vector")] public IActionResult MapsVector() => View("maps-vector");

        [ActionName("tables-basic")] public IActionResult TablesBasic() => View("tables-basic");
        [ActionName("tables-bootstrap")] public IActionResult TablesBootstrap() => View("tables-bootstrap");
        [ActionName("tables-datatables")] public IActionResult TablesDatatables() => View("tables-datatables");
        [ActionName("tables-editable")] public IActionResult TablesEditable() => View("tables-editable");
        [ActionName("tables-footables")] public IActionResult TablesFootables() => View("tables-footables");
        [ActionName("tables-jsgrid")] public IActionResult TablesJsgrid() => View("tables-jsgrid");
        [ActionName("tables-responsive")] public IActionResult TablesResponsive() => View("tables-responsive");
        [ActionName("tables-tablesaw")] public IActionResult TablesTablesaw() => View("tables-tablesaw");


        [ActionName("ui-avatars")] public IActionResult UiAvatars() => View("ui-avatars");
        [ActionName("ui-buttons")] public IActionResult UiButtons() => View("ui-buttons");
        [ActionName("ui-cards")] public IActionResult UiCards() => View("ui-cards");
        [ActionName("ui-carousel")] public IActionResult UiCarousel() => View("ui-carousel");
        [ActionName("ui-dropdowns")] public IActionResult UiDropdowns() => View("ui-dropdowns");
        [ActionName("ui-general")] public IActionResult UiGeneral() => View("ui-general");
        [ActionName("ui-grid")] public IActionResult UiGrid() => View("ui-grid");
        [ActionName("ui-images")] public IActionResult UiImages() => View("ui-images");
        [ActionName("ui-list-group")] public IActionResult UiListGroup() => View("ui-list-group");
        [ActionName("ui-modals")] public IActionResult UiModals() => View("ui-modals");
        [ActionName("ui-notifications")] public IActionResult UiNotifications() => View("ui-notifications");
        [ActionName("ui-offcanvas")] public IActionResult UiOffcanvas() => View("ui-offcanvas");
        [ActionName("ui-placeholders")] public IActionResult UiPlaceholders() => View("ui-placeholders");
        [ActionName("ui-portlets")] public IActionResult UiPortlets() => View("ui-portlets");
        [ActionName("ui-progress")] public IActionResult UiProgress() => View("ui-progress");
        [ActionName("ui-ribbons")] public IActionResult UiRibbons() => View("ui-ribbons");
        [ActionName("ui-spinners")] public IActionResult UiSpinners() => View("ui-spinners");
        [ActionName("ui-tabs-accordions")] public IActionResult UiTabsAccordions() => View("ui-tabs-accordions");
        [ActionName("ui-tooltips-popovers")] public IActionResult UiTooltipsPopovers() => View("ui-tooltips-popovers");
        [ActionName("ui-typography")] public IActionResult UiTypography() => View("ui-typography");
        [ActionName("ui-video")] public IActionResult UiVideo() => View("ui-video");
        [ActionName("widgets")] public IActionResult Widgets() => View("widgets");

        [ActionName("extended-animation")] public IActionResult ExtendedAnimation() => View("extended-animation");
        [ActionName("extended-dragula")] public IActionResult ExtendedDragula() => View("extended-dragula");
        [ActionName("extended-loading-buttons")] public IActionResult ExtendedLoadingButtons() => View("extended-loading-buttons");
        [ActionName("extended-nestable")] public IActionResult ExtendedNestable() => View("extended-nestable");
        [ActionName("extended-range-slider")] public IActionResult ExtendedRangeSlider() => View("extended-range-slider");
        [ActionName("extended-scrollspy")] public IActionResult ExtendedScrollspy() => View("extended-scrollspy");
        [ActionName("extended-sweet-alert")] public IActionResult ExtendedSweetAlert() => View("extended-sweet-alert");
        [ActionName("extended-tour")] public IActionResult ExtendedTour() => View("extended-tour");
    }
}