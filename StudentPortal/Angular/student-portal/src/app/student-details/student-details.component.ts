import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../Student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.sass']
})
export class StudentDetailsComponent implements OnInit {
  form: FormGroup;
  studentID: string;
  formData: Student = new Student();

  constructor(
    public fb: FormBuilder,
    public activateRoute: ActivatedRoute,
    public studentService: StudentService
  ) {}

  ngOnInit() {
    this.activateRoute.params.subscribe(param => (this.studentID = param.ID));
    if (this.studentID !== null) {
      this.editStudentDetails(this.studentID);
    }
  }
  buildForm() {
    this.form = this.fb.group({
      ...new Student()
    });
  }

  editStudentDetails(id: string) {
    this.studentService.getStudentDetails(id).subscribe(data => {
      this.formData = data;
      this.form.reset();
      this.form.patchValue(this.formData);
    });
  }
}
