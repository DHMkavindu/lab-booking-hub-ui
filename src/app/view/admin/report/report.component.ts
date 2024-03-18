import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  displayedColumns: string[] = ['patient', 'doctor', 'technician'];
  dataSource:any[]=[];
}
