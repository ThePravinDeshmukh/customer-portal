using CustomerPortal.Enums;
using System.ComponentModel.DataAnnotations.Schema;

namespace CustomerPortal.Models
{
    public class OrderLine
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public ProductType ProductType { get; set; }
        public int Quantity { get; set; }
        public Order Order { get; set; }
    }
}
