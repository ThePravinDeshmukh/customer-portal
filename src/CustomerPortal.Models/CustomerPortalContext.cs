using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;


namespace CustomerPortal.Models
{
    public class CustomerPortalContext : DbContext
    {
        protected readonly IConfiguration Configuration;
        public CustomerPortalContext(DbContextOptions<CustomerPortalContext> options) : base(options)
        {
        }
        public CustomerPortalContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Customer> Customers { get; set; }

    }
}
