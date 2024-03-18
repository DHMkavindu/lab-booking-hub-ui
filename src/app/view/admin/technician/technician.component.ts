import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TechnicianDto } from 'src/app/dto/TechnicianDto';
import { TechniciansService } from 'src/app/service/technicians.service';

interface TechniciansType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.css'],
})
export class TechnicianComponent {
  technicianForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    specialization: new FormControl('', [Validators.required]),
    // lastname:new FormControl('',[Validators.required]),
    telNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^\\d{9}'),
    ]),
    nic: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    availability: new FormControl('', [Validators.required]),
    maxAppointment: new FormControl('', [Validators.required]),
  });

  get firstname() {
    return this.technicianForm.get('firstname');
  }
  get specialization() {
    return this.technicianForm.get('specialization');
  }
  get contactNumber() {
    return this.technicianForm.get('telNumber');
  }
  get email() {
    return this.technicianForm.get('email');
  }
  get gender() {
    return this.technicianForm.get('gender');
  }
  get nic() {
    return this.technicianForm.get('nic');
  }
  get availability() {
    return this.technicianForm.get('availability');
  }
  get maxAppointment() {
    return this.technicianForm.get('maxAppointment');
  }

  displayedColumns: string[] = [
    'firstname',
    'contactNumber',
    'specialization',
    'nic',
    'action',
  ];
  dataSource: any[] = [];
  techniciansDto: TechnicianDto = new TechnicianDto();
  techniciansData: any;
  techniciansDetails = new Array();
  TechniciansType: TechniciansType[] = [
    { value: 'General Practice (GP)', viewValue: 'General Practice (GP)' },
    { value: 'Internal Medicine', viewValue: 'Internal Medicine' },
    { value: 'Pediatrics', viewValue: 'Pediatrics' },
    {
      value: 'Obstetrics and Gynecology (OB/GYN)',
      viewValue: 'Obstetrics and Gynecology (OB/GYN)',
    },
    { value: 'Cardiology', viewValue: 'Cardiology' },
    { value: 'Orthopedics', viewValue: 'Orthopedics' },
    { value: 'Dermatology', viewValue: 'Dermatology' },
    { value: 'Neurology', viewValue: 'Neurology' },
    { value: 'Psychiatry', viewValue: 'Psychiatry' },
    { value: 'Ophthalmology', viewValue: 'Ophthalmology' },
    {
      value: 'ENT (Ear, Nose, and Throat)',
      viewValue: 'ENT (Ear, Nose, and Throat)',
    },
    { value: 'Urology', viewValue: 'Urology' },
  ];
  labelPosition: 'No' | 'Yes' = 'Yes';

  constructor(private techniciansService: TechniciansService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.techniciansService.getAllTechnicians().subscribe((response) => {
      this.techniciansDetails = response.data;
      this.dataSource = this.techniciansDetails;
    });
  }

  save() {
    const name = this.firstname?.value as string;
    const specialization = this.specialization?.value as string;
    const contactNumber = this.contactNumber?.value as string;
    const nic = this.nic?.value as string;
    const email = this.email?.value as string;
    const gender = this.gender?.value as string;
    const maxAppointment = this.maxAppointment?.value as string;
    this.techniciansDto.name = name;
    this.techniciansDto.email = email;
    this.techniciansDto.gender = gender;
    this.techniciansDto.nic = nic;
    this.techniciansDto.specialization = specialization;
    this.techniciansDto.maxAppointment = maxAppointment;
    this.techniciansDto.telNumber = contactNumber;

    this.techniciansService.techniciansRegistrarion(this.techniciansDto).subscribe(
      (response) => {
        this.techniciansData = response;
        this.getAllData();
        alert('Sucessfully Registration');
      },
      (error) => {
        alert('Registration Fail..!');
      }
    );
  }
}
