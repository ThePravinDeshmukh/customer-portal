using CustomerPortal.Models;
using System.Collections.Generic;

namespace Albellicart.BusinessLogic
{
    public interface IUserLogic
    {
        IEnumerable<User> GetUsers();
        User GetUser(int id);
        User AddUser(User User);
    }
}