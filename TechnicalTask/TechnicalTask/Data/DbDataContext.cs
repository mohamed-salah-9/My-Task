using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TechnicalTask.Models;

namespace TechnicalTask.Data
{
    public class DbDataContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data source=dbsystem.db");
        }

        public DbSet<Employees> Employees { get; set; }

        public DbSet<Department> Departments { get; set; }

    }
}
