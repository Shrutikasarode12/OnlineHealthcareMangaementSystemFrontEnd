import { Component, OnInit } from '@angular/core';
import { MedicalstoreService } from '../../services/medicalstore.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from '../../moduls/medicine';

@Component({
  selector: 'app-updatemedicine',
  templateUrl: './updatemedicine.component.html',
  styleUrl: './updatemedicine.component.css'
})
export class UpdatemedicineComponent implements OnInit {
  
  constructor(private service:MedicalstoreService,private route:ActivatedRoute,private router:Router) { }

  medicine=new Medicine();
  medicineId:number=0;

  ngOnInit()
  {
    this.medicineId=this.route.snapshot.params['medicineId'];
    this.service.serchMedicine(this.medicineId).subscribe((data)=>{
    this.medicine=data;
    })
  }

  onSubmit()
  {
    this.updateMedicine();
  }

  updateMedicine()
  {
    this.service.updateMedicine(this.medicine).subscribe((data)=>{
     console.log(data);
    this.goToList(); 
  })
  }
  goToList()
  {
    this.router.navigate(['medicinelist']);
  }

}


