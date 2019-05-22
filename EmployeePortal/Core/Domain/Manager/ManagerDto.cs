using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Domain.Employee;
using Data;

namespace Core.Domain.Manager
{
    public class ManagerDto
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int SeniorManagerID { get; set; }
        public bool Active { get; set; }
        public ManagerDto Manager2 { get; set; }
    }
}
