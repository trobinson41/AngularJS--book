using BugExplorer.Models;
using Microsoft.EntityFrameworkCore;

namespace BugExplorer.Data
{
    public class BugContext : DbContext
    {
        public BugContext(DbContextOptions<BugContext> options) : base(options)
        {
        }

        public DbSet<Bug> Bugs { get; set; }
        public DbSet<Observation> Observations { get; set; }
        public DbSet<Photo> Photos { get; set; }
    }
}
