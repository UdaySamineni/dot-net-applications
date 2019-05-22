using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Core.Domain.Employee;
using Data;
using Moq;
using NUnit.Framework;

namespace UnitTest
{
    [TestFixture]
    class EmployeeRepositoryTests
    {
        private Mock<EmployeePortalEntities> _db;
        private EmployeeRepository _repository;

        [Test]
        public void TestGetEmployee()
        {
            //Arrange
            Mapper.Initialize(cfg => cfg.CreateMap<Employee, EmployeeDto>());
            var employees = new List<Employee>
            {
                new Employee{ID = 1, Name = "John"},
                new Employee{ID = 2, Name = "Peter"}
            }.AsQueryable();

            var mockEmployeeEntities = new Mock<DbSet<Employee>>();

            mockEmployeeEntities.As<IQueryable<Employee>>().Setup(m => m.Provider).Returns(employees.Provider);
            mockEmployeeEntities.As<IQueryable<Employee>>().Setup(m => m.Expression).Returns(employees.Expression);
            mockEmployeeEntities.As<IQueryable<Employee>>().Setup(m => m.ElementType).Returns(employees.ElementType);
            mockEmployeeEntities.As<IQueryable<Employee>>().Setup(m => m.GetEnumerator()).Returns(employees.GetEnumerator());

            _db = new Mock<EmployeePortalEntities>();
            _db.Setup(x => x.Employees).Returns(mockEmployeeEntities.Object);
            _repository = new EmployeeRepository(_db.Object);

            //Act
            var result = _repository.GetEmployee(1);

            //Assert
            Assert.AreEqual("John", result.Name);
        }
    }
}
