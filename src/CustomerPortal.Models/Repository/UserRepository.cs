using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CustomerPortal.Models.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly CustomerPortalContext context;
        public UserRepository(CustomerPortalContext context)
        {
            this.context = context;
        }

        public IEnumerable<User> GetUsers()
        {
            return context
                .User
                .ToList();
        }
        public User GetUser(int id)
        {
            return context
                .User
                .FirstOrDefault(x => x.Id == id);
        }
        public User AddUser(User User)
        {
            context.User.Add(User);
            context.SaveChanges();

            return User;
        }

        public bool IsAuthenticated(string emailAddress, string password)
        {
            return context
                .User
                .Any(x => x.EmailAddress == emailAddress && x.Password == password);
        }
    }
}
