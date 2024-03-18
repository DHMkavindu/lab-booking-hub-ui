import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorAppointmentDto } from '../dto/DoctorAppointment';

@Injectable({
  providedIn: 'root'
})
export class DoctorAppointmentService {

  baseUrl="http://localhost:8080/lab-booking/v1/appointment/";
  constructor(private http: HttpClient) { }

   headersObject = new HttpHeaders();
    headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS, DELETE",
      "Access-Control-Allow-Headers":"Authorization, Content-Type, enctype",
  });

  doctorAppointmentCreate(doctorAppointmentDto: DoctorAppointmentDto): Observable<any> {
    return this.http.post(this.baseUrl + "doctorAppointment", doctorAppointmentDto);
  }
  setAuthenticateHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +localStorage.getItem("token"),
      })
    };

    return httpOptions;
  }
}
