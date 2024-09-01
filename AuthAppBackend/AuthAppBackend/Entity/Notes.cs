using System.ComponentModel.DataAnnotations.Schema;

namespace AuthAppBackend.Entity
{
    public class Notes
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Contenido { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
