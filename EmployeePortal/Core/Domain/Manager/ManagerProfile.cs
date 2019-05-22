using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;

namespace Core.Domain.Manager
{
    public class ManagerProfile : Profile
    {
        public ManagerProfile()
        {
            CreateMap<Data.Manager, ManagerDto>();
        }
    }
}
