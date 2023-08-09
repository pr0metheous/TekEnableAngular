using Microsoft.EntityFrameworkCore;
using TekEnable.Models;

namespace TekEnable.Data
{
    public class TekEnableDbContext : DbContext
    {
        public TekEnableDbContext(DbContextOptions<TekEnableDbContext> options) : base(options) 
        {
        }


        public DbSet<Subscription> Subscriptions { get; set; }

    }
}
