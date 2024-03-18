import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatComponentModule } from 'src/app/mat-component.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashbordComponent } from './dashbord.component';
import { DashbordRoutingModule } from './dashbord-routing.module';
import { DoctorComponent } from './doctor/doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientComponent } from './patient/patient.component';
import { TechnicianComponent } from './technician/technician.component';
import { ReportComponent } from './report/report.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorService } from 'src/app/service/doctor.service';
import { HttpClientModule } from '@angular/common/http';
import { PatientService } from 'src/app/service/patient.service';
import { TechniciansService } from 'src/app/service/technicians.service';
import { DoctorAppointmentService } from 'src/app/service/doctor-appointment.service';


@NgModule({
  declarations: [
    DashbordComponent,
    SideBarComponent,
    TopBarComponent,
    DoctorComponent,
    PatientComponent,
    TechnicianComponent,
    ReportComponent,
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    MatComponentModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers:[DoctorService,PatientService,TechniciansService,DoctorAppointmentService]
})
export class DashbordModule { }
