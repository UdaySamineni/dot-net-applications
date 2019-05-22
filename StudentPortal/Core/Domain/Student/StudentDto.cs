
using Core.Domain.Teacher;

namespace Core.Domain.Student
{
    public class StudentDto
    {
        public int ID { get; set; }
        public int? RollNo { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public TeacherDto Teacher { get; set; }
    }
}
