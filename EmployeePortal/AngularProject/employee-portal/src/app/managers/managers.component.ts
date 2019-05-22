import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../services/manager.service';
import { Manager } from '../models/Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.sass']
})
export class ManagersComponent implements OnInit {
  constructor(private managerService: ManagerService, private router: Router) {}
  managers: Manager[] = [];

  ngOnInit() {
    this.loadManagers();
  }

  loadManagers() {
    this.managerService.getManagers().subscribe(data => {
      this.managers = data;
    });
  }

  getManagerDetails(dataItem) {
    this.router.navigate([`manager-details/${dataItem.ID}`]);
  }
  addManager() {
    this.router.navigate([`manager-details/new`]);
  }
}
