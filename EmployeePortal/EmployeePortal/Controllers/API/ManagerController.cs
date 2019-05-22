using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Core.Domain.Employee;
using Core.Domain.Manager;

namespace EmployeePortal.Controllers.API
{
    public class ManagerController : ApiController
    {
        private readonly IManager _managerRepository;

        public ManagerController(IManager managerRepository)
        {
            _managerRepository = managerRepository;
        }
        // GET: api/Manager
        public IList<ManagerDto> Get()
        {
            var managers = _managerRepository.GetManagers();
            return managers;
        }

        // GET: api/Manager/5
        public ManagerDto Get(int id)
        {
            var manager = this._managerRepository.GetManager(id);
            return manager;
        }

        // POST: api/Manager
        public void Post([FromBody]ManagerDto manager)
        {
            _managerRepository.AddManager(manager);
        }

        // PUT: api/Manager/5
        public void Put(int id, [FromBody]ManagerDto manager)
        {
            _managerRepository.UpdateManager(id, manager);
        }

        // DELETE: api/Manager/5
        public void Delete(int id)
        {
        }
    }
}
