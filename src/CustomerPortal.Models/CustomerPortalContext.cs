using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;


namespace CustomerPortal.Models
{
    public class CustomerPortalContext : DbContext
    {
        public CustomerPortalContext(DbContextOptions<CustomerPortalContext> options) : base(options)
        {

        }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderLine> OrderLines { get; set; }
        public DbSet<User> Users { get; set; }

        // The following configures EF to create a Sqlite database file as `C:\blogging.db`.
        // For Mac or Linux, change this to `/tmp/blogging.db` or any other absolute path.
        //protected override void OnConfiguring(DbContextOptionsBuilder options)
        //    => options.UseSqlite(@"Data Source=..\Albellicart.db");
    }
}
