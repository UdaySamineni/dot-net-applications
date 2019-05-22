import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../services/manager.service';
import { ActivatedRoute } from '@angular/router';
import { Manager, Employee } from '../models/Employee';
import { FormGroup, FormBuilder } from '@angular/forms';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.sass']
})
export class ManagerDetailsComponent implements OnInit {
  managerID: number;
  formData: Manager = new Manager();
  form: FormGroup;
  managers: Manager[] = [];
  srManager: any;

  constructor(
    public managerService: ManagerService,
    public activeRoute: ActivatedRoute,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buildForm();
    this.getManagers();
    this.activeRoute.params.subscribe(param => {
      if (param.ID !== 'new') {
        // tslint:disable-next-line: radix
        this.managerID = parseInt(param.ID);
      }
    });
    if (!isNullOrUndefined(this.managerID)) {
      this.getManagerDetails(this.managerID);
    }
  }

  buildForm() {
    this.form = this.fb.group({
      ...new Manager()
    });
  }

  getManagerDetails(Id: number) {
    this.managerService.getManagerDetails(Id).subscribe((data: Manager) => {
      this.formData = data;
      this.form.reset();
      this.form.patchValue(this.formData);
    });
  }

  getManagers() {
    this.managerService.getManagers().subscribe((data: Manager[]) => {
      this.managers = data.filter(x => x.ID !== this.managerID);
      this.srManager = data.filter(x => x.SeniorManagerID === this.managerID);
      if (this.srManager.length > 0) {
        this.form.controls.SeniorManagerID.disable();
      }
    });
  }

  saveManager() {
    if (isNullOrUndefined(this.form.controls.ID.value)) {
      this.managerService.addManager(this.form.value).subscribe(() => {
        console.log('Manager Added');
      });
    } else {
      this.managerService.updateManager(this.form.value).subscribe(() => {
        console.log('Manager Updated!');
      });
    }
  }
}
