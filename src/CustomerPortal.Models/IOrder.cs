﻿using System.Collections.Generic;

namespace CustomerPortal.Models
{
    public interface IOrder
    {
        int Id { get; set; }
        IEnumerable<OrderLine> OrderLines { get; set; }
        User User { get; set; }
    }
}