import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicianRoutingModule } from './technician-routing.module';
import { TechnicianComponent } from './technician.component';


@NgModule({
  declarations: [
    TechnicianComponent
  ],
  imports: [
    CommonModule,
    TechnicianRoutingModule
  ]
})
export class TechnicianModule { }
