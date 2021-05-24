using System.Collections.Generic;
using System.Linq;

namespace CustomerPortal.Models.Repository
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly CustomerPortalContext _context;
        public CustomerRepository(CustomerPortalContext context)
        {
            _context = context;
        }
        public Customer Create(Customer customer)
        {
            // validation
            if (customer == null)
                throw new ValidationException("CRE001", "");


            if (_context.Customers.Any(x => x.Name == customer.Name))
                throw new ValidationException("CRE002", "");

            _context.Customers.Add(customer);
            _context.SaveChanges();

            return customer;
        }

        public IEnumerable<Customer> GetAll()
        {
            return _context.Customers;
        }

        public Customer GetById(int id)
        {
            return _context.Customers.Find(id);
        }
    }
}
