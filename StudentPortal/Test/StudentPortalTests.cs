using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using Core.Domain.Student;
using Data;
using Moq;
using NUnit.Framework;
using AutoMapper;

namespace Test
{
    [TestFixture]
    public class StudentPortalTests
    {
        private static StudentRepository _studentRepository;
        private Mock<StudentPortalEntities1> _dbContext;

        [Test(Description = "Student Test")]
        public void StudentRepoTest()
        {
            Mapper.Initialize(cfg => cfg.CreateMap<Student, StudentDto>());

            _dbContext = new Mock<StudentPortalEntities1>();
            var studentEntity = new Mock<DbSet<Student>>();
            var studentsList = new List<Student>()
            {
                new Student()
                {
                    First_Name = "Uday",
                    Last_Name = "Samineni",
                    ID =  new Guid()
                },
                new Student()
                {
                    First_Name = "Rishitha",
                    Last_Name = "Nimmagadda",
                    ID = new Guid()
                }
            }.AsQueryable();

            studentEntity.As<IQueryable<Student>>().Setup((students => students.Provider))
                .Returns(() => studentsList.Provider);
            //studentEntity.As<IQueryable<Student>>().Setup(students => students.ElementType)
            //    .Returns(studentsList.ElementType);
            studentEntity.As<IQueryable<Student>>().Setup(students => students.Expression)
                .Returns(() => studentsList.Expression);
            //studentEntity.As<IQueryable<Student>>().Setup(students => students.GetEnumerator())
            //    .Returns(() => studentsList.GetEnumerator());

            _dbContext.Setup(x => x.Students).Returns(studentEntity.Object);
            _studentRepository = new StudentRepository(_dbContext.Object);
            var result = _studentRepository.getStudentByID(new Guid());
            var result1 = _studentRepository.IsStudentRepository();
            Assert.AreEqual(true, result1);
            //studentEntity.Verify(set => set.AddOrUpdate(It.IsAny<Student>()), Times.Once());
            //_dbContext.Verify(entities => entities.SaveChanges(), Times.Once());
            Assert.AreEqual("Uday", result.FirstName);
        }
    }
}
