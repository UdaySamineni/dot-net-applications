//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class Student
    {
        public System.Guid ID { get; set; }
        public Nullable<int> RollNo { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public Nullable<System.Guid> TeacherID { get; set; }
        public string Teacher_Comments { get; set; }
    
        public virtual Teacher Teacher { get; set; }
    }
}