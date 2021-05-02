using CustomerPortal.Models;
using CustomerPortal.Models.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Albellicart.BusinessLogic
{
    public class UserLogic : IUserLogic
    {
        private readonly IUserRepository _UserRepository;
        private readonly IProductRepository _productRepository;
        public UserLogic(IUserRepository UserRepository, IProductRepository productRepository)
        {
            _UserRepository = UserRepository;
            _productRepository = productRepository;
        }
        public IEnumerable<User> GetUsers()
        {
            return _UserRepository.GetUsers();
        }
        public User GetUser(int id)
        {
            return _UserRepository.GetUser(id);
        }
        public User AddUser(User User)
        {
            if (User == null 
                || string.IsNullOrEmpty(User.EmailAddress)
                || string.IsNullOrEmpty(User.Password)
                || string.IsNullOrEmpty(User.FirstName)
                || string.IsNullOrEmpty(User.LastName))
            {
                throw new Exception("User cannot be empty. Please Check all fields.");
            }

            return _UserRepository.AddUser(User);
        }
    }
}
