import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(public http: HttpClient) {}
  baseUrl = 'http://localhost:54826/api/';

  getStudentDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Student/${id}`);
  }

  getStudents(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Student`);
  }
}
