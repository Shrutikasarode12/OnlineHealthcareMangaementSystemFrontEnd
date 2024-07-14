import { Component } from '@angular/core';
import { Doctor } from '../../moduls/doctors';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrl: './doctorlist.component.css'
})
export class DoctorlistComponent {
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
  deleteDoctor(id:number)
  {
    console.log("Inside delete method")
      this.service.deleteDoctor(id).subscribe((data)=>{
        console.log(data);
    
        this.getAll();
      });
  }
  findDoctor(id:number)
    {
        this.router.navigate(['search',id]);
    }
  updateDoctor(id:number)
   {
     this.router.navigate(['update',id]);
   }
}
