import { Component } from '@angular/core';
import { MedicalstoreService } from '../../services/medicalstore.service';
import { Router } from '@angular/router';
import { Medicine } from '../../moduls/medicine';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrl: './medicinelist.component.css'
})
export class MedicinelistComponent {

  constructor(private service :MedicalstoreService,private router:Router){ }
  public medicine:Observable<Medicine []>=of([]);

 
  ngOnInit(): void {
    this.getAll();
  }
  getAll()
  {
    console.log("Inside getall methode")
    this.medicine = this.service.getAllMadicine();
  }
  deleteMedicine(id:number)
  {
    console.log("Inside delete method")
      this.service.deleteMedicine(id).subscribe((data)=>{
        console.log(data);
    
        this.getAll();
      });
  }
  findMedicine(id:number)
    {
        this.router.navigate(['search',id]);
    }
  updateMedicine(id:number)
   {
     this.router.navigate(['updateMedicine',id]);
   }
}
