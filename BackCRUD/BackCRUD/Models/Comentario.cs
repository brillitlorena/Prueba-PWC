using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackCRUD.Models
{
    public class Comentario
    {
        public int id { get; set; }
        [Required]
        public string titulo { get; set; }
        [Required]
        public string autor { get; set; }
        [Required]
        public string texto { get; set; }
        [Required]
        public DateTime fechaCreacion { get; set; }

    }
}
