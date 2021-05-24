using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace CustomerPortal.Models.Helpers
{
    public class CustomerPortalSqliteContext : CustomerPortalContext
    {
        public CustomerPortalSqliteContext(IConfiguration configuration) : base(configuration) { }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sqlite database
            options.UseSqlite(Configuration.GetConnectionString(Constants.CustomerPortal_CONTEXT));
        }
    }
}
