using System.ComponentModel.DataAnnotations;

namespace TekEnable.Models
{
    public class Subscription
    {
        public int Id { get; set; }

        [Required]
        [EmailAddress]
        [Display(Name = "Email Addrress")]
        public string EmailAddress { get; set; } = string.Empty;

        [Required]
        [Display(Name = "How did you hear about us")]

        public string HowYouHeard { get; set; } = string.Empty;
        [Display(Name = "Reason for Signing Up")]

        public string SignUpReason { get; set; } = string.Empty;
    }
}
