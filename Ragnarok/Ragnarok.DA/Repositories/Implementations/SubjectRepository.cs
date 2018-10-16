using Ragnarok.DA.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Ragnarok.DA.Entities;

namespace Ragnarok.DA.Repositories.Implementations
{
    public class SubjectRepository : ISubjectRepository
    {
        private CathalogueDBContext context;

        public SubjectRepository(CathalogueDBContext context)
        {
            this.context = context;
        }

        public IEnumerable<Subject> GetSubjects()
        {
            return context.Subjects.ToList();
        }

        public Subject GetSubjectById(Guid id)
        {
            return context.Subjects.Find(id);
        }
    }
}