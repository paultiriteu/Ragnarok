using Ragnarok.DA.Entities;
using Ragnarok.DA.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Ragnarok.DA.Repositories.Implementations
{
    public class ProfessorRepository : IProfessorRepository
    {
        private CathalogueDBContext context;

        public ProfessorRepository(CathalogueDBContext context)
        {
            this.context = context;
        }

        public IEnumerable<Professor> GetProfessors()
        {
            var prof = context.Professors.ToList();
            return prof;
        }

        public Professor GetById(Guid id)
        {
            return context.Professors.Find(id);
        }
    }
}