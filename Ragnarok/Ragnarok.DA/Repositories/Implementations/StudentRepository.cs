using Ragnarok.DA.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Ragnarok.DA.Repositories.Implementations
{
    public class StudentRepository : IStudentRepository, IDisposable
    {
        private CathalogueDBContext context;

        public StudentRepository(CathalogueDBContext context)
        {
            this.context = context;
        }

        public IEnumerable<Student> GetStudents()
        {
            return context.Students.OrderBy(x => x.LastName).ThenBy(x => x.FirstName).ThenBy(x => x.Year).ThenBy(x => x.Class).ToList();
        }

        public Student GetStudentById(Guid id)
        {
            return context.Students.Find(id);
        }

        public IEnumerable<Student> GetStudentsByYear(string year)
        {
            return context.Students.Where(x => x.Class == year);
        }

        public void InsertStudent(Student student)
        {
            context.Students.Add(student);
        }

        public void DeleteStudent(Guid id)
        {
            Student student = context.Students.Find(id);
            context.Students.Remove(student);
        }

        public void UpdateStudent(Student student)
        {
            context.Entry(student).State = EntityState.Modified;
        }

        public void Save()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}