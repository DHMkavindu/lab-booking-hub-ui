import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './view/login/login.component';
import { MatComponentModule } from 'src/app/mat-component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatComponentModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[LoginService],
})
export class LoginModule { }
