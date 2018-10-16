using Ragnarok.DA.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ragnarok.DA.Repositories
{
    public interface IStudentRepository : IDisposable
    {
        IEnumerable<Student> GetStudents();
        Student GetStudentById(Guid id);
        IEnumerable<Student> GetStudentsByYear(String year);
        void InsertStudent(Student student);
        void DeleteStudent(Guid id);
        void UpdateStudent(Student student);
        void Save();
    }
}
