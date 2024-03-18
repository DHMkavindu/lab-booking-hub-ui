import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginDto } from 'src/app/dto/LoginDto';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide: boolean = false;
  loginDto:LoginDto= new LoginDto;
  loginData:any;


  loginForm=new FormGroup({
    userName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  })

constructor(private loginService:LoginService, private router: Router){}

  get userName (){
    return this.loginForm.get("userName");
  }
  get password(){
   return this.loginForm.get("password");
  }

  login(){
    console.log("---"+this.userName?.value)
    const name = this.userName?.value as string;
    const pawd = this.password?.value as string;
    this.loginDto.userName = name;
    this.loginDto.password = pawd;
   
    this.loginService.login(this.loginDto).subscribe(response=>{
    this.loginData = response;
    if(this.loginData.status == "200"){
      localStorage.setItem("token",this.loginData.token);
      localStorage.setItem("tokenType",this.loginData.tokenType);
      localStorage.setItem("userType",this.loginData.userType);
      localStorage.setItem("userid",this.loginData.userid);
    }else{
      alert("Incorrect UserName Or Password")
    }
    this.router.navigate(['/dashbord']);
      console.log(this.loginData.userType)
  }, error => {
   // this.alert("Warning", "Incorrect UserName Or Password", "warning", "");
  });
  }
}
