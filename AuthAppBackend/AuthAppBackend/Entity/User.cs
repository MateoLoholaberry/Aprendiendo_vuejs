using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace AuthAppBackend.Entity
{
    public class User : IdentityUser<int>
    {
        public string? Initials { get; set; }
        ICollection<Notes> Notes { get; set; }
    }
}
