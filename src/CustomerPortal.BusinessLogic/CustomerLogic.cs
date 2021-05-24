using CustomerPortal.BusinessLogic.Helpers;
using CustomerPortal.Models;
using CustomerPortal.Models.Enums;
using CustomerPortal.Models.Repository;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CustomerPortal.BusinessLogic
{
    public class CustomerLogic : ICustomerLogic
    {
        private readonly ICustomerRepository _customerRepository;
        public CustomerLogic(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        public Customer Create(Customer customer)
        {
            return _customerRepository.Create(customer);
        }

        public IEnumerable<Customer> GetAll()
        {
            return _customerRepository.GetAll();
        }

        public Customer GetById(int id)
        {
            return _customerRepository.GetById(id);
        }
    }
}

