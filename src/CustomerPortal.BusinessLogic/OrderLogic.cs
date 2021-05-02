using CustomerPortal.Models;
using CustomerPortal.Models.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Albellicart.BusinessLogic
{
    public class OrderLogic : IOrderLogic
    {
        private readonly IOrderRepository _orderRepository;
        public OrderLogic(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }
        public IEnumerable<Order> GetOrders()
        {
            return _orderRepository.GetOrders();
        }
        public Order GetOrder(int id)
        {
            return _orderRepository.GetOrder(id);
        }
        public Order AddOrder(Order order)
        {
            if (order == null || order.OrderLine == null || !order.OrderLine.Any())
            {
                throw new Exception("Order cannot be empty. Please add product and quantity.");
            }

            if (GetCountAfterRemovingZeroQtyProducts(order) == 0)
            {
                throw new Exception("Order cannot have products without valid quantity. Please add product and valid quantity.");
            }

            return _orderRepository.AddOrder(order);
        }

        private static int GetCountAfterRemovingZeroQtyProducts(Order order)
        {
            var orderlines = order
                .OrderLine
                .ToList();

            orderlines.RemoveAll(x => x.Quantity == 0);

            order.OrderLine = orderlines;

            return order.OrderLine.Count();
        }
    }
}
