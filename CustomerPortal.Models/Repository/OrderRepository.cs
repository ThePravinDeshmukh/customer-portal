using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CustomerPortal.Models.Repository
{
    public class OrderRepository : IOrderRepository
    {
        private readonly CustomerPortalContext context;
        public OrderRepository(CustomerPortalContext context)
        {
            this.context = context;
        }

        public IEnumerable<Order> GetOrders()
        {
            return context
                .Order
                .Include(b => b.OrderLine)
                .ToList();
        }
        public Order GetOrder(int id)
        {
            return context
                .Order
                .Include(b => b.OrderLine)
                .FirstOrDefault(x => x.Id == id);
        }
        public Order AddOrder(Order order)
        {
            context.Order.Add(order);
            context.SaveChanges();

            return order;
        }
    }
}
