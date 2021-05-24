using System.Collections.Generic;

namespace CustomerPortal.Models.Repository
{
    public interface ICustomerRepository
    {
        IEnumerable<Customer> GetAll();
        Customer GetById(int id);
        Customer Create(Customer user);

    }
}