import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { TechnicianComponent } from './technician/technician.component';
import { ReportComponent } from './report/report.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  {path:'',component:DashbordComponent,
  children: [
      {path:'appointment',component:AppointmentComponent},
      {path:'doctor',component:DoctorComponent},
      {path:'patient',component:PatientComponent},
      {path:'technicians',component:TechnicianComponent},
      {path:'report',component:ReportComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
