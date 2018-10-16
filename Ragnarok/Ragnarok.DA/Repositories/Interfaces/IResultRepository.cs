using Ragnarok.DA.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ragnarok.DA.Repositories.Interfaces
{
    public interface IResultRepository
    {
        IEnumerable<Result> GetResults();
        IEnumerable<Result> GetResultsByStudentId(Guid studentId);
        Result GetResultById(Guid id);
        void InsertResult(Result result);
        void DeleteResult(Guid id);
        void UpdateResult(Result result);
        void Save();
        Subject GetSubjectById(Guid id);
        IEnumerable<Subject> GetSubjects();
        IEnumerable<Professor> GetProfessors(Guid id);
    }
}