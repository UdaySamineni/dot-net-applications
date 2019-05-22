import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ManagersComponent } from './managers/managers.component';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'employee-details/:ID',
    component: EmployeeDetailsComponent
  },
  {
    path: 'managers',
    component: ManagersComponent
  },
  {
    path: 'manager-details/:ID',
    component: ManagerDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
