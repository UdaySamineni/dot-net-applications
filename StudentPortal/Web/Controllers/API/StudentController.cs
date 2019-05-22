using System;
using System.Collections.Generic;
using Core.Domain.Student;
using Data;
using System.Web.Http;
using System.Threading.Tasks;

namespace Web.Controllers.API
{
    public class StudentController : ApiController
    {
        private readonly IStudent _studentService;
        public StudentController(IStudent studentService)
        {
            _studentService = studentService;
        }

        [HttpGet]
        public StudentDto Get(Guid id)
        {
            var student = _studentService.getStudentByID(id);
            return student;
        }

        public List<StudentDto> GetList()
        {
            List<StudentDto> list = _studentService.GetStudents();
            return list;
        }

        [HttpPut]
        public StudentDto Put(Guid id, StudentDto value)
        {

            var result = _studentService.EditStudent(id, value);
            return result;
        }
    }
}
