using System.ComponentModel.DataAnnotations;

namespace CustomerPortal.Models
{
    public class AuthenticateModel
    {
        [Required]
        public string EmailAddress { get; set; }

        [Required]
        public string Password { get; set; }
    }
}