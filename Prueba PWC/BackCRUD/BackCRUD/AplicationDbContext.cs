using BackCRUD.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackCRUD
{
    public class AplicationDbContext: DbContext
    {
        public AplicationDbContext()
        {

        }
        public AplicationDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Comentario> Comentario { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if(!optionsBuilder.IsConfigured) {
                optionsBuilder.UseMySql("Server=localhost; Database=PruebaPWC; User=root; Password=12345");
            }            
        }
    }
}
