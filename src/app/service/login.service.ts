import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto } from '../dto/LoginDto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl="http://localhost:8080/lab-booking/v1/authentication/";
  constructor(private http: HttpClient) { }

   headersObject = new HttpHeaders();
    headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS, DELETE",
      "Access-Control-Allow-Headers":"Authorization, Content-Type, enctype",
  });


  login(loginDto: LoginDto): Observable<any> {
    return this.http.post(this.baseUrl + "singIn", loginDto);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  setAuthenticateHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.getToken(),
      })
    };

    return httpOptions;
  }
}
