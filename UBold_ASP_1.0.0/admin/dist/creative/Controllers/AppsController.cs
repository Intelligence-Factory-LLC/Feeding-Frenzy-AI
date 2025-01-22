using Microsoft.AspNetCore.Mvc;

namespace UBOLD_CORE.Controllers
{
    public class AppsController : Controller
    {
        public AppsController()
        {
        }

        [ActionName("apps-calendar")] public IActionResult AppsCalendar() => View("apps-calendar");
        [ActionName("apps-chat")] public IActionResult AppsChat() => View("apps-chat");
        [ActionName("apps-companies")] public IActionResult AppsCompanies() => View("apps-companies");
        [ActionName("apps-file-manager")] public IActionResult AppsFileManager() => View("apps-file-manager");
        [ActionName("apps-social-feed")] public IActionResult AppsSocialFeed() => View("apps-social-feed");



        [ActionName("ecommerce-cart")] public IActionResult EcommerceCart() => View("ecommerce-cart");
        [ActionName("ecommerce-checkout")] public IActionResult EcommerceCheckout() => View("ecommerce-checkout");
        [ActionName("ecommerce-customers")] public IActionResult EcommerceCustomers() => View("ecommerce-customers");
        [ActionName("ecommerce-dashboard")] public IActionResult EcommerceDashboard() => View("ecommerce-dashboard");
        [ActionName("ecommerce-order-detail")] public IActionResult EcommerceOrderDetail() => View("ecommerce-order-detail");
        [ActionName("ecommerce-orders")] public IActionResult EcommerceOrders() => View("ecommerce-orders");
        [ActionName("ecommerce-product-detail")] public IActionResult EcommerceProductDetail() => View("ecommerce-product-detail");
        [ActionName("ecommerce-product-edit")] public IActionResult EcommerceProductEdit() => View("ecommerce-product-edit");
        [ActionName("ecommerce-products")] public IActionResult EcommerceProducts() => View("ecommerce-products");
        [ActionName("ecommerce-sellers")] public IActionResult EcommerceSellers() => View("ecommerce-sellers");



        [ActionName("crm-contacts")] public IActionResult CrmContacts() => View("crm-contacts");
        [ActionName("crm-customers")] public IActionResult CrmCustomers() => View("crm-customers");
        [ActionName("crm-dashboard")] public IActionResult CrmDashboard() => View("crm-dashboard");
        [ActionName("crm-leads")] public IActionResult CrmLeads() => View("crm-leads");
        [ActionName("crm-opportunities")] public IActionResult CrmOpportunities() => View("crm-opportunities");



        [ActionName("email-compose")] public IActionResult EmailCompose() => View("email-compose");
        [ActionName("email-inbox")] public IActionResult EmailInbox() => View("email-inbox");
        [ActionName("email-read")] public IActionResult EmailRead() => View("email-read");
        [ActionName("email-templates-action")] public IActionResult EmailTemplatesAction() => View("email-templates-action");
        [ActionName("email-templates-alert")] public IActionResult EmailTemplatesAlert() => View("email-templates-alert");
        [ActionName("email-templates-billing")] public IActionResult EmailTemplatesBilling() => View("email-templates-billing");
        [ActionName("email-templates")] public IActionResult EmailTemplates() => View("email-templates");


        [ActionName("project-create")] public IActionResult ProjectCreate() => View("project-create");
        [ActionName("project-detail")] public IActionResult ProjectDetail() => View("project-detail");
        [ActionName("project-list")] public IActionResult ProjectList() => View("project-list");



        [ActionName("task-details")] public IActionResult TaskDetails() => View("task-details");
        [ActionName("task-kanban-board")] public IActionResult TaskKanbanBoard() => View("task-kanban-board");
        [ActionName("task-list")] public IActionResult TaskList() => View("task-list");



        [ActionName("contacts-list")] public IActionResult ContactsList() => View("contacts-list");
        [ActionName("contacts-profile")] public IActionResult ContactsProfile() => View("contacts-profile");



        [ActionName("tickets-detail")] public IActionResult TicketsDetail() => View("tickets-detail");
        [ActionName("tickets-list")] public IActionResult TicketsList() => View("tickets-list");
    }
}