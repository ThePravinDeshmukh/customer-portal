﻿using System.Collections.Generic;

namespace CustomerPortal.Models.Repository
{
    public interface IUserRepository
    {
        User Authenticate(string username, string password);
        IEnumerable<User> GetAll();
        User GetById(int id);
        User Create(User user, string password);

    }
}