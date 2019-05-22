import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = 'http://localhost:52187/api';
  constructor(public http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/employee`);
  }

  loadEmployee(id: number) {
    return this.http.get(`${this.baseUrl}/employee/${id}`);
  }

  saveEmployee(employee: Employee): Observable<object> {
    return this.http.put(`${this.baseUrl}/employee/${employee.ID}`, employee);
  }

  addEmployee(employee: Employee): Observable<object> {
    return this.http.post(`${this.baseUrl}/employee`, employee);
  }

  deleteEmployee(id: number): Observable<object> {
    return this.http.delete(`${this.baseUrl}/employee/${id}`);
  }
}
