import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorDto } from 'src/app/dto/DoctorDto';
import { DoctorService } from 'src/app/service/doctor.service';
interface DoctorType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  
  doctorDto:DoctorDto= new DoctorDto;
  doctorData:any;

  doctorForm=new FormGroup({
    firstname:new FormControl('',[Validators.required]),
    specialization:new FormControl('',[Validators.required]),
    // lastname:new FormControl('',[Validators.required]),
    telNumber:new FormControl('',[Validators.required,Validators.pattern("^\\d{9}")]),
    nic:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    availability:new FormControl('',[Validators.required]),
    maxAppointment:new FormControl('',[Validators.required]),
  })

  constructor(private doctorService:DoctorService, private router: Router){}

  get firstname (){
    return this.doctorForm.get("firstname");
  }
  get specialization (){
    return this.doctorForm.get("specialization");
  }
  get contactNumber (){
    return this.doctorForm.get("telNumber");
  }
  get nic (){
    return this.doctorForm.get("nic");
  }
  get email (){
    return this.doctorForm.get("email");
  }
  get gender (){
    return this.doctorForm.get("gender");
  }
  get availability (){
    return this.doctorForm.get("availability");
  }

  get maxAppointment(){
    return this.doctorForm.get("maxAppointment");
  }

  displayedColumns: string[] = ['firstname', 'lastname', 'contactNumber', 'nic','action'];
  dataSource:any[]=[];
  doctorType: DoctorType[] = [
    {value: 'General Practice (GP)', viewValue: 'General Practice (GP)'},
    {value: 'Internal Medicine', viewValue: 'Internal Medicine'},
    {value: 'Pediatrics', viewValue: 'Pediatrics'},
    {value: 'Obstetrics and Gynecology (OB/GYN)', viewValue: 'Obstetrics and Gynecology (OB/GYN)'},
    {value: 'Cardiology', viewValue: 'Cardiology'},
    {value: 'Orthopedics', viewValue: 'Orthopedics'},
    {value: 'Dermatology', viewValue: 'Dermatology'},
    {value: 'Neurology', viewValue: 'Neurology'},
    {value: 'Psychiatry', viewValue: 'Psychiatry'},
    {value: 'Ophthalmology', viewValue: 'Ophthalmology'},
    {value: 'ENT (Ear, Nose, and Throat)', viewValue: 'ENT (Ear, Nose, and Throat)'},
    {value: 'Urology', viewValue: 'Urology'},
  ];
  labelPosition: 'No' | 'Yes' = 'Yes';
   
  
  saveCustomer(){
    console.log("---"+this.firstname?.value)
    const name = this.firstname?.value as string;
    const specialization = this.specialization?.value as string;
    const contactNumber = this.contactNumber?.value as string;
    const nic = this.nic?.value as string;
    const email = this.email?.value as string;
    const gender = this.gender?.value as string;
    const availability = this.availability?.value as string;
    const maxAppointment = this.maxAppointment?.value as string;
    this.doctorDto.name = name;
    this.doctorDto.email = email; 
    this.doctorDto.gender = gender; 
    this.doctorDto.nic = nic;  
    this.doctorDto.specialization = specialization;
   // this.doctorDto.availability = availability;
    this.doctorDto.maxAppointment = maxAppointment;
    this.doctorDto.telNumber = contactNumber;

    this.doctorService.doctorRegistrarion(this.doctorDto).subscribe(response=>{
      this.doctorData = response;
      console.log(this.doctorData)
      if(this.doctorData.status == "200"){
        alert("Sucessfully Registration")
        this.doctorService.getAllDoctors().subscribe(response=>{
          if(this.doctorData.status == "200"){
            console.log(this.doctorData);
          }
        })
      }else{
        alert("Registration Fail..!")
      }
      this.router.navigate(['/doctor']);
    }, error => {
     // this.alert("Warning", "Incorrect UserName Or Password", "warning", "");
    });
  }
}
