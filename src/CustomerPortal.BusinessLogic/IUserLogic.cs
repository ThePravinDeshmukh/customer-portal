using CustomerPortal.Models;
using System.Collections.Generic;

namespace CustomerPortal.BusinessLogic
{
    public interface IUserLogic
    {
        IEnumerable<User> GetAll();
        User GetById(int id);
    }
}