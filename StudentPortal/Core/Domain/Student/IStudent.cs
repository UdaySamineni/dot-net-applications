

using System;
using System.Collections.Generic;

namespace Core.Domain.Student
{
    public interface IStudent
    {
        StudentDto getStudentByID(Guid id);
        StudentDto EditStudent(Guid id, StudentDto student);
        List<StudentDto> GetStudents();
    }
}
