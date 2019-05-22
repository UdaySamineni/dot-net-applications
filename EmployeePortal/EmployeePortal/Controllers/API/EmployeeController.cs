using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Core.Domain.Employee;

namespace EmployeePortal.Controllers.API
{
    public class EmployeeController : ApiController
    {
        private readonly IEmployee _employeeRepository;

        public EmployeeController(IEmployee employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        // GET: api/Employee
        public IEnumerable<EmployeeDto> Get()
        {
            var employees = _employeeRepository.GetEmployees();
            return employees;
        }

        // GET: api/Employee/5

        public EmployeeDto Get(int id)
        {
            var employee = _employeeRepository.GetEmployee(id);
            return employee;
        }

        // POST: api/Employee
        public void Post([FromBody]EmployeeDto employee)
        {
            _employeeRepository.AddEmployee(employee);
        }

        // PUT: api/Employee/5
        public EmployeeDto Put(int id, [FromBody]EmployeeDto employee)
        {
            var employeeDto = _employeeRepository.UpdateEmployee(id, employee);
            return employeeDto;
        }

        // DELETE: api/Employee/5
        public void Delete(int id)
        {
            _employeeRepository.DeleteEmployee(id);
        }
    }
}
