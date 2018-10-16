using Ragnarok.DA.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Ragnarok.DA.Entities;
using System.Data.Entity;

namespace Ragnarok.DA.Repositories.Implementations
{
    public class ResultRepository : IResultRepository
    {
        private CathalogueDBContext context;

        public ResultRepository(CathalogueDBContext context)
        {
            this.context = context;
        }

        public IEnumerable<Result> GetResults()
        {
            return context.Results.ToList();
        }

        public IEnumerable<Result> GetResultsByStudentId(Guid studentId)
        {
            var results = context.Results.Where(x => x.Student_Id == studentId).ToList();
            return results;
        }

        public Result GetResultById(Guid id)
        {
            return context.Results.Find(id);
        }

        public void InsertResult(Result result)
        {
            context.Results.Add(result);
            context.SaveChanges();
        }

        public void UpdateResult(Result result)
        {
            context.Entry(result).State = EntityState.Modified;
            context.SaveChanges();
        }

        public void DeleteResult(Guid id)
        {
            Result result = context.Results.Find(id);
            context.Results.Remove(result);
            context.SaveChanges();
        }
        
        public void Save()
        {
            context.SaveChanges();
        }

        //SUBJECTS
        public Subject GetSubjectById(Guid id)
        {
            return context.Subjects.Find(id);
        }

        public IEnumerable<Subject> GetSubjects()
        {
            return context.Subjects.ToList();
        }

        //PROFESSORS
        public IEnumerable<Professor> GetProfessors(Guid id)
        {
            return context.Professors.ToList().Where(x => x.Id == id);
        }
    }
}