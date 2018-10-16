using Ragnarok.DA.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Ragnarok.DA
{
    public class CathalogueDBContext : DbContext
    {
        public CathalogueDBContext(string connectionString) : base(connectionString)
        {
        }

        public CathalogueDBContext() : base("SampleContext")
        {
        }
        
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Subject>()
                .HasMany(s => s.Professors)
                .WithMany(p => p.Subjects)
                .Map(ps =>
                {
                    ps.MapLeftKey("SubjectId");
                    ps.MapRightKey("ProfessorId");
                    ps.ToTable("SubjectProfessors");
                });
        }

        public DbSet<Professor> Professors { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Result> Results { get; set; }
    }
}