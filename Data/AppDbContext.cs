using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Portfolio.Models;

namespace Portfolio.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }


        public DbSet<ProjectItem> Projects { get; set; }
        public DbSet<SkillItem> Skills { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            base.OnModelCreating(modelBuilder);
        }
    }
}
