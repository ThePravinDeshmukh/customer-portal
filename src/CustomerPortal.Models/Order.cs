using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace CustomerPortal.Models
{
    public class Order : IOrder
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public IEnumerable<OrderLine> OrderLine { get; set; } = new List<OrderLine>();

        public User User { get; set; }
    }
}
