using System.Collections.Generic;

namespace CustomerPortal.Models.Repository
{
    public interface IOrderRepository
    {
        Order AddOrder(Order order);
        Order GetOrder(int id);
        IEnumerable<Order> GetOrders();
    }
}