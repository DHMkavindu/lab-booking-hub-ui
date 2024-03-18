import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PatientDto } from 'src/app/dto/PatientDto';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent {
  patientForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    telNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^\\d{9}'),
    ]),
    address: new FormControl('', [Validators.required]),
    nic: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
  });

  get firstname() {
    return this.patientForm.get('firstname');
  }
  get address() {
    return this.patientForm.get('address');
  }
  get contactNumber() {
    return this.patientForm.get('telNumber');
  }
  get nic() {
    return this.patientForm.get('nic');
  }
  get email() {
    return this.patientForm.get('email');
  }
  get gender() {
    return this.patientForm.get('gender');
  }
  get age() {
    return this.patientForm.get('age');
  }

  displayedColumns: string[] = [
    'firstname',
    'email',
    'address',
    'contactNumber',
    'nic',
    'action',
  ];

  dataSource: any[] = [];
  patientDto: PatientDto = new PatientDto();
  patientData: any;
  patientDetails = new Array();

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.patientService.getAllPatient().subscribe((response) => {
      this.patientDetails = response.data;
      this.dataSource = this.patientDetails;
    });
  }

  save() {
    const name = this.firstname?.value as string;
    const address = this.address?.value as unknown as string;
    const contactNumber = this.contactNumber?.value as string;
    const nic = this.nic?.value as string;
    const email = this.email?.value as string;
    const gender = this.gender?.value as string;
    const age = this.age?.value as string;
    this.patientDto.name = name;
    this.patientDto.email = email;
    this.patientDto.gender = gender;
    this.patientDto.nic = nic;
    this.patientDto.address = address;
    this.patientDto.age = age;
    this.patientDto.telNumber = contactNumber;

    this.patientService.patientRegistrarion(this.patientDto).subscribe(
      (response) => {
        this.patientData = response;
        this.getAllData();
        alert('Sucessfully Registration');
      },
      (error) => {
        alert('Registration Fail..!');
      }
    );
  }
}
