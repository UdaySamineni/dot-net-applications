import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee, Manager } from '../models/Employee';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ManagerService } from '../services/manager.service';
import { isNullOrEmptyString } from '@progress/kendo-angular-grid/dist/es2015/utils';
import { isNullOrUndefined } from 'util';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.sass']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeID: number;
  employee: Employee = {} as Employee;
  form: FormGroup;
  formData: Employee = new Employee();
  managers: Manager[] = [];
  isDialogOpen = false;
  messages: string[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private managerService: ManagerService,
    private router: Router,
    public notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.buildForm();
    this.getManagers();
    this.activeRoute.params.subscribe(param => {
      if (param.ID !== 'new') {
        this.employeeID = param.ID;
      }
    });
    if (!isNullOrUndefined(this.employeeID)) {
      this.loadEmployeeDetails(this.employeeID);
    }
  }

  buildForm() {
    this.form = this.fb.group({
      ...new Employee()
    });
  }

  loadEmployeeDetails(id: number) {
    this.employeeService.loadEmployee(id).subscribe((data: Employee) => {
      this.formData = data;
      this.form.patchValue(this.formData);
    });
  }

  getManagers() {
    this.managerService.getManagers().subscribe(data => {
      this.managers = data;
    });
  }

  saveEmployee() {
    this.validate();
    if (this.messages.length > 0) {
      this.showNotification(this.messages[0], 'error');
      return;
    }
    if (isNullOrUndefined(this.form.controls.ID.value)) {
      this.employeeService.addEmployee(this.form.value).subscribe(data => {
        this.showNotification('Added successfully', 'success');
        console.log('Added successfully', +data);
      });
    } else {
      this.employeeService.saveEmployee(this.form.value).subscribe(data => {
        this.showNotification('Saved successfully', 'success');
        console.log('saved successfully!', +data);
      });
    }
  }

  validate() {
    if (isNullOrEmptyString(this.form.controls.Name.value)) {
      this.messages.push('Name is required!');
    }
  }

  openDeleteDialog() {
    this.isDialogOpen = true;
  }

  deleteEmployee() {
    this.form.controls.Active.patchValue(false);
    this.employeeService.saveEmployee(this.form.value).subscribe(() => {
      console.log('Employee deleted successfully!');
      this.isDialogOpen = false;
      this.router.navigate([`employees`]);
    });
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  showNotification(context: string, errorType: string) {
    const type: any = { style: errorType, icon: true };
    this.notificationService.show({
      content: context,
      cssClass: 'button-notification',
      animation: { type: 'fade', duration: 5 },
      position: { horizontal: 'right', vertical: 'top' },
      type: type,
      hideAfter: 2000
    });
  }
}
