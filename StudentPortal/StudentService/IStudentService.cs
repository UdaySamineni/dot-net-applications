using Core.Domain.Student;
using System.ServiceModel;

namespace StudentService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IStudentService" in both code and config file together.
    [ServiceContract]
    public interface IStudentService
    {
        [OperationContract]
        StudentDto GetStudentById(int id);
    }
}
