import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorDto } from '../dto/DoctorDto';
import { TechnicianDto } from '../dto/TechnicianDto';

@Injectable({
  providedIn: 'root'
})
export class TechniciansService {

  baseUrl="http://localhost:8080/lab-booking/v1/technicians/";
  constructor(private http: HttpClient) { }

   headersObject = new HttpHeaders();
    headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS, DELETE",
      "Access-Control-Allow-Headers":"Authorization, Content-Type, enctype",
  });

  techniciansRegistrarion(techniciansDto: TechnicianDto): Observable<any> {
    return this.http.post(this.baseUrl + "saveTechnicians", techniciansDto);
  }

  getAllTechnicians(): Observable<any>{
    return this.http.get(this.baseUrl + "getAllTechnicians",this.setAuthenticateHeaders());
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
