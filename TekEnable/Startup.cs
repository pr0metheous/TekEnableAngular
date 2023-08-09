using Microsoft.EntityFrameworkCore;
using TekEnable.Data;
using Microsoft.AspNetCore.Mvc;
using TekEnable.Models;

public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddDbContext<TekEnableDbContext>(options =>
       options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

        services.AddControllersWithViews();


        services.AddSpaStaticFiles(configuration =>
        {
            configuration.RootPath = "Client-app/dist";
        });
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.UseRouting();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });

     
        app.UseSpa(spa =>
        {
            spa.Options.SourcePath = "Client-app"; 

            if (env.IsDevelopment())
            {
                spa.UseProxyToSpaDevelopmentServer("http://localhost:5003");
            }
        });
    }
}


[ApiController]
[Route("api/[controller]")]
public class NewsletterController : ControllerBase
{
    private readonly TekEnableDbContext _context;

    public NewsletterController(TekEnableDbContext context)
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
                var subscription = new Subscription
                {
                    EmailAddress = model.EmailAddress,
                };

                _context.Subscriptions.Add(subscription);
                _context.SaveChanges();
                return Ok("You have been signed up to the newsletter!");
            }
        }

        return BadRequest("Invalid form data.");
    }
}


