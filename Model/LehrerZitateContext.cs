using Microsoft.EntityFrameworkCore;

namespace LehrerZitateApi.Model
{
    public class LehrerZitateContext : DbContext
    {
        public LehrerZitateContext(DbContextOptions<LehrerZitateContext> options)
            : base(options)
        {
        }

        public DbSet<LehrerZitat> LehrerZitate { get; set; }
    }
}
