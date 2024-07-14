import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { Appointment } from '../../moduls/appointment';
import { AppointmentsService } from '../../services/appointments.service';
import { Observable, of } from 'rxjs';
import { Doctor } from '../../moduls/doctors';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  constructor(private service:AppointmentsService,private router:Router){ }
  
  doctors:Observable<Doctor[]>=of([]);

  appointment=new Appointment();

  onSubmit()
  {
    console.log("Save");
    this.save();
  
  }
    save(){
      this.service.addAppintments(this.appointment).subscribe();
     
    }
}
