import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../models/Employee';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass']
})
export class EmployeesComponent implements OnInit {
  formData: Employee[] = [];
  @Input()
  managerID: number;

  constructor(public employeeService: EmployeeService, public route: Router) {}
  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      if (this.managerID === undefined) {
        this.formData = data;
      } else if (this.managerID == null) {
        this.formData = null;
      } else {
        this.formData = data.filter(x => x.ManagerID === this.managerID);
      }
    });
  }

  editEmployee(dataItem) {
    this.route.navigate([`employee-details/${dataItem.ID}`]);
  }

  addNewEmployee() {
    this.route.navigate([`employee-details/new`]);
  }

}
