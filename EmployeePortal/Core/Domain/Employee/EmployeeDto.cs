using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Domain.Manager;

namespace Core.Domain.Employee
{
    public class EmployeeDto
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int ManagerID { get; set; }
        public bool Active { get; set; }
        public ManagerDto Manager { get; set; }
    }
}
