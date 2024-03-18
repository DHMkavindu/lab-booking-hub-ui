import { DoctorDto } from "./DoctorDto";
import { PatientDto } from "./PatientDto";

export class DoctorAppointmentDto{
    id:number=0;
    appointmentType:string='';
    time:string='';
    date!:Date;
    doctor!:DoctorDto;
    patient!:PatientDto;
}