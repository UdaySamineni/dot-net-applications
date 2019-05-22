import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl: string = 'http://localhost:54826/api/';
  constructor(private http: HttpClient) {}

  getStudentByID(id: number): Observable<object> {
    return this.http.get<object>(`${this.baseUrl}Student/` + id);
  }

  editStudentDetails(student: any): Observable<object> {
    return this.http.put<Object>(
      `${this.baseUrl}Student/` + student.id,
      student
    );
  }
}
