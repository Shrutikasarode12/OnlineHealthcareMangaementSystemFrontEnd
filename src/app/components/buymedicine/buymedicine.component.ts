import { Component } from '@angular/core';
import { MedicalstoreService } from '../../services/medicalstore.service';
import { Router } from '@angular/router';
import { Medicine } from '../../moduls/medicine';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-buymedicine',
  templateUrl: './buymedicine.component.html',
  styleUrl: './buymedicine.component.css'
})
export class BuymedicineComponent {

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
  
  buy(){

  }
  addtocart(){

  }
 
}
