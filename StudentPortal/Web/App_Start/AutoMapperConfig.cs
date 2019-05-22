using AutoMapper;
using Core.Domain.Student;
using Core.Domain.Teacher;
using Data;

namespace Web
{
    public static class AutoMapperConfig
    {
        public static void Config()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Student, StudentDto>()
                    .ForMember(x => x.FirstName, expression => expression.MapFrom(x => x.First_Name))
                    .ForMember(x => x.LastName, expression => expression.MapFrom(x => x.Last_Name));
                cfg.AddProfile<TeacherProfiler>();
            });
        }
    }
}