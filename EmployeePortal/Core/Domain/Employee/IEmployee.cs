using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Domain.Employee
{
    public interface IEmployee
    {
        IEnumerable<EmployeeDto> GetEmployees();
        EmployeeDto GetEmployee(int id);
        EmployeeDto UpdateEmployee(int id, EmployeeDto employee);
        void AddEmployee(EmployeeDto employee);
        void DeleteEmployee(int id);
    }
}
