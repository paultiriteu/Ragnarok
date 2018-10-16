using Ragnarok.DA;
using Ragnarok.DA.Repositories.Implementations;
using Ragnarok.DA.Repositories.Interfaces;
using Ragnarok.Models;
using Runtime.Mapper;
using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Linq;

namespace Ragnarok.Controllers.Api
{
    public class ResultsController : ApiController
    {
        private CathalogueDBContext db = new CathalogueDBContext();
        private IResultRepository resultRepository;

        public ResultsController(IResultRepository resultRepository)
        {
            this.resultRepository = resultRepository;
        }

        public ResultsController()
        {
            this.resultRepository = new ResultRepository(db);
        }

        [HttpGet]
        [Route("api/results")]
        public Result[] List()
        {
            return resultRepository.GetResults().DeepCopyTo<Result[]>();
        }

        [HttpGet]
        [Route("api/results/{id}")]
        public Result GetById(Guid id)
        {
            return resultRepository.GetResultById(id).DeepCopyTo<Result>();
        }

        [HttpGet]
        [Route("api/results/getByStudentId/{id}")]
        public Result[] GetByStudentId(Guid id)
        {
            return resultRepository.GetResultsByStudentId(id).DeepCopyTo<Result[]>();
        }

        [HttpPost]
        [Route("api/results")]
        public IHttpActionResult Update(Result result)
        {
            if (result.Id != Guid.Parse("00000000-0000-0000-0000-000000000000"))
            {
                resultRepository.UpdateResult(result.DeepCopyTo<DA.Entities.Result>());
            }
            else
            {
                result.Id = Guid.NewGuid();
                resultRepository.InsertResult(result.DeepCopyTo<DA.Entities.Result>());
            }
            return Ok();
        }

        [HttpGet]
        [Route("api/subjects")]
        public Subject[] GetSubjects()
        {
            var subjects = this.resultRepository.GetSubjects();
            return subjects.Select(x => new Subject
            {
                Id = x.Id,
                Name = x.Name,
                Professors = x.Professors.Select(p => new Professor
                {
                    Id = p.Id,
                    FirstName = p.FirstName,
                    LastName = p.LastName,
                    Subjects = new Subject[0]
                }).ToArray()
            }).ToArray();
        }

        [HttpGet]
        [Route("api/subjects/{id}")]
        public Subject GetSubjectById(Guid id)
        {
            var subject = this.resultRepository.GetSubjectById(id);
            return new Subject
            {
                Id = subject.Id,
                Name = subject.Name,
                Professors = subject.Professors.Select(p => new Professor
                {
                    Id = p.Id,
                    FirstName = p.FirstName,
                    LastName = p.LastName,
                    Subjects = new Subject[0]
                }).ToArray()
            };
        }

        [HttpGet]
        [Route("api/results/professors/{id}")]
        public Professor[] GetProfessor(Guid id)
        {
            return this.resultRepository.GetProfessors(id).DeepCopyTo<Professor[]>();
        }

        [HttpDelete]
        [Route("api/results/{id}")]
        public IHttpActionResult Delete(Guid id)
        {
            this.resultRepository.DeleteResult(id);
            return Ok();
        }
    }
}