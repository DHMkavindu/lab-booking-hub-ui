import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./view/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'dashbord',
    loadChildren: () =>
      import('./view/admin/dashbord.module').then((m) => m.DashbordModule),
  },
  
  {
    path: 'doctor',
    loadChildren: () =>
      import('./view/doctor/doctor.module').then((m) => m.DoctorModule),
  },
  {
    path: 'patient',
    loadChildren: () =>
      import('./view/patient/patient.module').then((m) => m.PatientModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
