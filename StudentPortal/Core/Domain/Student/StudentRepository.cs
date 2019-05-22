using Data;
using System.Linq;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Net;
using Core.Domain.Sample;
using Data;

namespace Core.Domain.Student
{
    public class StudentRepository : IStudent
    {
        readonly StudentPortalEntities1 _dBContext;
        //private readonly ISample _sample;
        public StudentRepository(StudentPortalEntities1 dbContext)
        {
            _dBContext = dbContext;
            //  _sample = sample;
        }

        public List<StudentDto> GetStudents()
        {
            var students = _dBContext.Students.ToList();
            return Mapper.Map<List<Data.Student>, List<StudentDto>>(students);
        }

        public StudentDto getStudentByID(Guid id)
        {
            var student = _dBContext.Students.Where(x => x.ID == id).AsEnumerable().OrderBy(x => x.Last_Name).FirstOrDefault();
            return Mapper.Map<Data.Student, StudentDto>(student);

            //IStudentService objService = new StudentServiceClient();
            //var obj = objService.GetStudentById(id);
            //return new StudentDto()
            //{
            //    FirstName = obj.FirstName,
            //    LastName = obj.LastName
            //};
        }

        public void AddStudent(StudentDto studentDto)
        {
            var student = _dBContext.Students.Add(new Data.Student());
            _dBContext.SaveChanges();
        }

        public StudentDto EditStudent(Guid id, StudentDto studentDto)
        {
            var student = _dBContext.Students.FirstOrDefault(x => x.ID == id);
            if (student == null)
            {
                //return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            _dBContext.Entry(student).State = System.Data.Entity.EntityState.Modified;
            _dBContext.SaveChanges();
            return Mapper.Map<Data.Student, StudentDto>(student);
        }

        public void DeleteStudent(Guid id)
        {
            var student = _dBContext.Students.FirstOrDefault(x => x.ID == id);
            if (student == null)
            {
                throw new NullReferenceException("ID should not be null");
            }
            _dBContext.Students.Remove(student);
            _dBContext.SaveChanges();
        }

        public Data.Student GetStudentDetailsFromDb(Guid id)
        {
            return _dBContext.Students.Where(x => x.ID == id).AsEnumerable().FirstOrDefault();
        }

        public bool IsStudentRepository()
        {
            return true;
        }
    }
}
