import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { StudentService } from '../student.service';

class Student {
  ID: string = undefined;
  FirstName: string = undefined;
  LastName: string = undefined;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass']
})
export class StudentsComponent implements OnInit {
  constructor(
    public appService: AppService,
    public studentSerive: StudentService,
    public fb: FormBuilder,
    public route: Router
  ) {}
  studentID: number;
  student: Student;
  form: FormGroup;
  formData = [];
  studentList: Student[];
  title = 'student-portal';

  ngOnInit() {
    this.form = this.fb.group({
      ...new Student()
    });

    this.getStudents();
  }

  getStudentDetailsBySearch() {
    this.appService
      .getStudentByID(this.studentID)
      .subscribe((data: Student) => {
        this.form.patchValue(data);
      });
  }

  getStudents() {
    this.studentSerive.getStudents().subscribe(data => {
      this.formData = data;
      this.form.reset();
      this.form.patchValue(this.formData);
    });
  }

  editStudentDetails(student: Student) {
    console.log(student);
  }

  getStudentDetails(dataItem) {
    this.route.navigate([`app/studentDetails/${dataItem.ID}`]);
  }
}
