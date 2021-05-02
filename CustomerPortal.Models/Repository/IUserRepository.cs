using System.Collections.Generic;

namespace CustomerPortal.Models.Repository
{
    public interface IUserRepository
    {
        IEnumerable<User> GetUsers();
        User GetUser(int id);
        User AddUser(User User);
        bool IsAuthenticated(string emailAddress, string password);

    }
}