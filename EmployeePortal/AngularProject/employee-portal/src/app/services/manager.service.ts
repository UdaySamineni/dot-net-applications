import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manager } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  baseUrl = 'http://localhost:52187/api';

  constructor(public http: HttpClient) {}

  getManagers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/manager`);
  }

  getManagerDetails(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/manager/${id}`);
  }

  updateManager(manager: Manager): Observable<object> {
    return this.http.put(`${this.baseUrl}/manager/${manager.ID}`, manager);
  }

  addManager(manager: Manager): Observable<object> {
    return this.http.post(`${this.baseUrl}/manager`, manager);
  }
}
