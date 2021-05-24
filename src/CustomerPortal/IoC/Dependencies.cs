using CustomerPortal.BusinessLogic;
using CustomerPortal.Models.Repository;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace CustomerPortal.IoC
{
    public static class Dependencies
    {
        public static void Map(this IServiceCollection services)
        {
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<ICustomerLogic, CustomerLogic>();
            services.AddScoped<SecurityTokenHandler, JwtSecurityTokenHandler>();
        }
    }
}
