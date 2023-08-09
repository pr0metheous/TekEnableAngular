using Microsoft.AspNetCore.Mvc;
using TekEnable.Data;
using TekEnable.Models;
using System.Linq;

namespace TekEnable.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SubscriptionsController : ControllerBase
    {
        private readonly TekEnableDbContext _context;

        public SubscriptionsController(TekEnableDbContext context)
        {
            _context = context;
        }

        [HttpPost("signup")]
        public IActionResult SignUp([FromBody] Subscription model)
        {
            if (ModelState.IsValid)
            {
                if (_context.Subscriptions.Any(x => x.EmailAddress == model.EmailAddress))
                {
                    return Conflict("You are already signed up!");
                }
                else
                {
                    _context.Subscriptions.Add(model);
                    _context.SaveChanges();
                    return Ok("You have been signed up to the newsletter!");
                }
            }

            return BadRequest("Invalid form data.");
        }
    }
}
