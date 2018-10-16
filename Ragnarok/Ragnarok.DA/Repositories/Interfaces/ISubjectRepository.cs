using Ragnarok.DA.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ragnarok.DA.Repositories.Interfaces
{
    public interface ISubjectRepository
    {
        IEnumerable<Subject> GetSubjects();
        Subject GetSubjectById(Guid id);
    }
}