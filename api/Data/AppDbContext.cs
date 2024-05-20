using jwtRegisterLogin;
using Microsoft.EntityFrameworkCore;

namespace jwtRegisterLogin.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {           
        }

    }
}
