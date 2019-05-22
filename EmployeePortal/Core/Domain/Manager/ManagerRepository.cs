using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Data;

namespace Core.Domain.Manager
{
    public class ManagerRepository : IManager
    {
        private readonly EmployeePortalEntities _dbContext;
        public ManagerRepository(EmployeePortalEntities dbContext)
        {
            _dbContext = dbContext;
        }

        public List<ManagerDto> GetManagers()
        {
            var managers = _dbContext.Managers.ToList();
            return Mapper.Map<List<Data.Manager>, List<ManagerDto>>(managers);
        }
        public ManagerDto GetManager(int id)
        {
            var manager = _dbContext.Managers.Find(id);
            return Mapper.Map<Data.Manager, ManagerDto>(manager);
        }

        public void UpdateManager(int id, ManagerDto manager)
        {
            var managerEntity = _dbContext.Managers.Find(id);
            if (managerEntity == null)
            {
                throw new NullReferenceException();
            }

            var updatedMangerEntity = Mapper.Map<ManagerDto, Data.Manager>(manager);
            _dbContext.Managers.AddOrUpdate(updatedMangerEntity);
            _dbContext.SaveChanges();
        }

        public void AddManager(ManagerDto manager)
        {
            var managerEntity = _dbContext.Managers.Find(manager.ID);
            if (managerEntity == null)
            {
                var newManagerEntity = Mapper.Map<ManagerDto, Data.Manager>(manager);
                _dbContext.Managers.Add(newManagerEntity);
                _dbContext.SaveChanges();
            }
        }
    }
}
