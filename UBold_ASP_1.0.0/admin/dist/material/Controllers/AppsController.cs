using Microsoft.AspNetCore.Mvc;

namespace UBOLD_CORE.Controllers
{
    public class AppsController : Controller
    {
        public AppsController()
        {
        }

        public IActionResult Calendar() => View();

        public IActionResult Chat() => View();

        public IActionResult Companies() => View();

        public IActionResult FileManager() => View("File-Manager");

        public IActionResult SocialFeed() => View("Social-Feed");

        public IActionResult Cart() => View();
        
        public IActionResult Checkout() => View();
        
        public IActionResult customers() => View();

        [ActionName("ecommerce-dashboard")]
        public IActionResult EcommerceDashboard() => View("ecommerce-dashboard");
        
        public IActionResult orderdetail() => View("order-detail");
        
        public IActionResult orders() => View();
        
        public IActionResult productdetail() => View("product-detail");
        
        public IActionResult productEdit() => View("product-edit");
        
        public IActionResult products() => View();
        
        public IActionResult Sellers() => View();


        [ActionName("crm-dashboard")]
        public IActionResult CRMDashboard() => View("crm-dashboard");

        [ActionName("crm-customers")]
        public IActionResult CRMCustomers() => View("crm-customers");

        [ActionName("crm-contacts")]
        public IActionResult CRMcontacts() => View("crm-contacts");

        [ActionName("crm-opportunities")]
        public IActionResult CRMopportunities() => View("crm-opportunities");

        [ActionName("crm-leads")]
        public IActionResult CRMleads() => View("crm-leads");


        [ActionName("email-inbox")]
        public IActionResult Inbox() => View("email-inbox");

        [ActionName("email-read")]
        public IActionResult EmailRead() => View("email-read");

        [ActionName("email-compose")]
        public IActionResult EmailCompose() => View("email-compose");

        [ActionName("email-templates")]
        public IActionResult EmailTemplates() => View("email-templates");


        [ActionName("project-create")]
        public IActionResult ProjectCreate() => View("project-create");

        [ActionName("project-detail")]
        public IActionResult ProjectDetail() => View("project-detail");

        [ActionName("project-list")]
        public IActionResult ProjectList() => View("project-list");


        [ActionName("task-list")]
        public IActionResult TaskList() => View("task-list");

        [ActionName("task-details")]
        public IActionResult TaskDetails() => View("task-details");

        [ActionName("task-kanban-board")]
        public IActionResult TaskKanbanBoard() => View("task-kanban-board");

        [ActionName("contacts-list")]
        public IActionResult Contacts() => View("contacts-list");

        [ActionName("contacts-profile")]
        public IActionResult ContactsProfile() => View("contacts-profile");

        [ActionName("tickets-list")]
        public IActionResult TicketsList() => View("tickets-list");

        [ActionName("tickets-detail")]
        public IActionResult TicketsDetail() => View("tickets-detail");
    }
}         