using System.ComponentModel.DataAnnotations.Schema;

namespace CustomerPortal.Models
{
    public class Customer
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public int Reference { get; set; }
        public string Email { get; set; }
        public int Phone { get; set; }
        public int Fax { get; set; }
    }
}
