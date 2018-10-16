using Ragnarok.DA;
using Ragnarok.DA.Entities;
using Ragnarok.DA.Repositories.Implementations;
using Ragnarok.DA.Repositories.Interfaces;
using Runtime.Mapper;
using System;
using System.Linq;
using System.Web.Http;

namespace Ragnarok.Controllers.Api
{
    public class ProfessorsController : ApiController
    {
        private CathalogueDBContext db = new CathalogueDBContext();
        private IProfessorRepository professorRepository;

        public ProfessorsController(IProfessorRepository professorRepository)
        {
            this.professorRepository = professorRepository;
        }

        public ProfessorsController()
        {
            this.professorRepository = new ProfessorRepository(db);
        }

        [HttpGet]
        [Route("api/professors")]
        public Professor[] List()
        {
            var professors = professorRepository.GetProfessors();
            return professors.Select(x => new Professor
            {
                Id = x.Id,
                FirstName = x.FirstName,
                LastName = x.LastName,
                Subjects = x.Subjects.Select(s => new Subject
                {
                    Id = s.Id,
                    Name = s.Name,
                    Professors = new Professor[7]
                }).ToArray()
            }).ToArray();
        }

        [HttpGet]
        [Route("api/professors/{id}")]
        public Professor GetById(Guid id)
        {
            return this.professorRepository.GetById(id).DeepCopyTo<Professor>();
        }
    }
}