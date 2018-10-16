using Ragnarok.DA.Entities;
using System;
using System.Collections.Generic;

namespace Ragnarok.DA.Repositories.Interfaces
{
    public interface IProfessorRepository
    {
        IEnumerable<Professor> GetProfessors();
        Professor GetById(Guid id);
    }
}