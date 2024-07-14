import { Component } from '@angular/core';
import { MedicalstoreService } from '../../services/medicalstore.service';
import { Medicine } from '../../moduls/medicine';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.component.html',
  styleUrl: './addmedicine.component.css'
})
export class AddmedicineComponent {
  alert:boolean=false;

  constructor(private service:MedicalstoreService){ }
   medicine =new Medicine();

  onSubmit(){
    console.log("Save");
    this.save();
  
  }
    save(){
      this.service.addMedicine(this.medicine).subscribe();
      this.alert=true
      
    }
    closeAlert()
    {
      this.alert=false;
    }
}
