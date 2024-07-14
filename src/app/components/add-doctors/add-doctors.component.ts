import { Component } from '@angular/core';
import { Doctor } from '../../moduls/doctors';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctors',
  templateUrl: './add-doctors.component.html',
  styleUrl: './add-doctors.component.css'
})
export class AddDoctorsComponent {
 
 
  alert:boolean=false;
  constructor(private service:DoctorService){ }
  doctor=new Doctor();

  onSubmit()
  {
    console.log("Save");
    this.save();
    console.log( this.doctor.doctorId )
   
  

  }
    save(){
      this.service.addDoctor(this.doctor).subscribe(); 
      this.alert=true

    }
    closeAlert()
    {
      this.alert=false;
    }
}
