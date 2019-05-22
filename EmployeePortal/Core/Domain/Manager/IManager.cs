using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Domain.Manager
{
    public interface IManager
    {
        List<ManagerDto> GetManagers();
        ManagerDto GetManager(int id);
        void UpdateManager(int id, ManagerDto manager);
        void AddManager(ManagerDto manager);
    }
}
