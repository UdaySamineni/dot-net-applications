using AutoMapper;
using Core.Domain.Employee;
using Core.Domain.Manager;

namespace EmployeePortal
{
    public static class AutoMapperConfig
    {
        public static void Config()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfile<EmployeeProfile>();
                cfg.AddProfile<ManagerProfile>();
                cfg.CreateMap<ManagerDto, Data.Manager>();
            });
        }
    }
}