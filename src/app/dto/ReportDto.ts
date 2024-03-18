import { DoctorDto } from "./DoctorDto";
import { PatientDto } from "./PatientDto";
import { TechnicianDto } from "./TechnicianDto";

export class ReportDto{
    id:number=0;
    content:string='';
    patient!: PatientDto;
    doctor!:DoctorDto;
    technician!:TechnicianDto;
}