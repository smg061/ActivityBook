using System;
using System.Threading.Tasks;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext: DbContext
    {

        public DataContext(DbContextOptions options): base(options) 
        {
        }
        public DbSet<Activity> Activities { get; set;}
        public DbSet<Place> Places {get; set;}

        public Task<Activity> FindAsync(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}