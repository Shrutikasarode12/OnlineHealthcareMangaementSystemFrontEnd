import { Component } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';
import { Doctor } from '../../moduls/doctors';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {
  constructor(private service:DoctorService,private router:Router){ }
  doctor:Observable<Doctor[]>=of([]);

  ngOnInit(): void {
      
    this.getAll();
  }
  getAll()
  {

    console.log("Inside getall methode")
    this.doctor = this.service.getAllDoctor();
    
  }
}
