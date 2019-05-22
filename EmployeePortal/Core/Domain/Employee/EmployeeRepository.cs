using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Data;

namespace Core.Domain.Employee
{
    public class EmployeeRepository : IEmployee
    {
        private readonly EmployeePortalEntities _dbContext;

        public EmployeeRepository(EmployeePortalEntities dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<EmployeeDto> GetEmployees()
        {
            var employees = _dbContext.Employees.AsEnumerable().Where(x => x.Active);
            return Mapper.Map<IEnumerable<Data.Employee>, IEnumerable<EmployeeDto>>(employees);
        }

        public EmployeeDto GetEmployee(int id)
        {
            var employee = _dbContext.Employees.FirstOrDefault(x => x.ID == id);
            //  employee = null;
            return Mapper.Map<Data.Employee, EmployeeDto>(employee);
        }

        public EmployeeDto UpdateEmployee(int id, EmployeeDto employee)
        {
            var employeEntity = _dbContext.Employees.FirstOrDefault(x => x.ID == id);
            if (employeEntity == null)
            {
                throw new ArgumentNullException($"Employee Id - {id} couldn't be found!");
            }
            employeEntity.Name = employee.Name;
            employeEntity.ManagerID = employee.ManagerID;
            _dbContext.Employees.AddOrUpdate(employeEntity);
            _dbContext.SaveChanges();
            return Mapper.Map<Data.Employee, EmployeeDto>(employeEntity);
        }

        public void AddEmployee(EmployeeDto employee)
        {
            var employeeEntity = _dbContext.Employees.FirstOrDefault(x => x.ID == employee.ID);
            if (employeeEntity != null)
            {
                throw new Exception($"Employee already exist in the system.");
            }

            var newEmployeeEntity = new Data.Employee
            {
                Name = employee.Name,
                ManagerID = employee.ManagerID,
                Active = true
            };
            _dbContext.Employees.Add(newEmployeeEntity);
            _dbContext.SaveChanges();
        }

        public void DeleteEmployee(int id)
        {
            var employee = _dbContext.Employees.FirstOrDefault(x => x.ID == id);
            if (employee == null) return;
            _dbContext.Employees.Remove(employee);
            _dbContext.SaveChanges();
        }
    }
}
