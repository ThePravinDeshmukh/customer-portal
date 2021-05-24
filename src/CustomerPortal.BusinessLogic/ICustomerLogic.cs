using CustomerPortal.Models;
using System.Collections.Generic;

namespace CustomerPortal.BusinessLogic
{
    public interface ICustomerLogic
    {
        Customer Create(Customer customer);
        IEnumerable<Customer> GetAll();
        Customer GetById(int id);
    }
}