import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorDto } from '../dto/DoctorDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  baseUrl="http://localhost:8080/lab-booking/v1/doctor/";
  constructor(private http: HttpClient) { }

   headersObject = new HttpHeaders();
    headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS, DELETE",
      "Access-Control-Allow-Headers":"Authorization, Content-Type, enctype",
  });

  doctorRegistrarion(doctorDto: DoctorDto): Observable<any> {
    return this.http.post(this.baseUrl + "saveDoctor", doctorDto);
  }

  getAllDoctors(): Observable<any>{
    return this.http.get(this.baseUrl + "getAllDoctors",this.setAuthenticateHeaders());
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
