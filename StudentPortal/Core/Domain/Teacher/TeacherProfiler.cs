using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Data;

namespace Core.Domain.Teacher
{
    public class TeacherProfiler : Profile
    {
        public TeacherProfiler()
        {
            CreateMap<Data.Teacher, TeacherDto>()
                .ForMember(x => x.FirstName, opt => opt.MapFrom(x => x.First_Name))
                .ForMember(x => x.LastName, opt => opt.MapFrom(x => x.Last_Name));
        }
    }
}
