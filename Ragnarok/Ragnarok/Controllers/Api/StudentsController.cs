using Ragnarok.DA;
using Ragnarok.DA.Repositories;
using Ragnarok.Models;
using Runtime.Mapper;
using System.Linq;
using System.Collections.Generic;
using System.Web.Http;
using Ragnarok.DA.Repositories.Implementations;
using System;

namespace Ragnarok.Controllers.Api
{
    public class StudentsController : ApiController
    {
        private CathalogueDBContext db = new CathalogueDBContext();
        private IStudentRepository studentRepository;

        public StudentsController(IStudentRepository studentRepository)
        {
            this.studentRepository = studentRepository;
        }
        public StudentsController()
        {
            this.studentRepository = new StudentRepository(this.db);
        }

        [HttpGet]
        [Route("api/students")]
        public Student[] List()
        {
            return studentRepository.GetStudents().DeepCopyTo<Student[]>();
        }

        [HttpGet]
        [Route("api/students/{id}")]
        public Student GetById(Guid id)
        {
            return studentRepository.GetStudentById(id).DeepCopyTo<Student>();
        }

        [HttpGet]
        [Route("api/students/{class}")]
        public Student[] GetByYear(String year)
        {
            return studentRepository.GetStudentsByYear(year).DeepCopyTo<Student[]>();
        }
    }
}
