import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { DoctorlistComponent } from './components/doctorlist/doctorlist.component';
import { AddDoctorsComponent } from './components/add-doctors/add-doctors.component';
import { MedicalstoreComponent } from './components/medicalstore/medicalstore.component';
import { AddmedicineComponent } from './components/addmedicine/addmedicine.component';
import { MedicinelistComponent } from './components/medicinelist/medicinelist.component';
import { BuymedicineComponent } from './components/buymedicine/buymedicine.component';
import { EventsComponent } from './components/events/events.component';
import { UpdatemedicineComponent } from './components/updatemedicine/updatemedicine.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'About',
    component:AboutComponent
  },
  {
    path:'Srvices',
    component:ServicesComponent
  },
  {
    path:'contact',
    component:ContactsComponent
  },
  
  {
    path:'appointment',
    component:AppointmentComponent
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
      path:'admindashbord',
      component:AdmindashboardComponent
  },
  {
    path:'doctor',
   component:DoctorComponent
},
{
  path:'doctorlist',
 component:DoctorlistComponent
},
{
  path:'add-doctors',
 component:AddDoctorsComponent
},
{
  path:'medicalstore',
 component:MedicalstoreComponent,
},
{ 
  path:'addmedicalstore',
  component:AddmedicineComponent
},
{
  path:'medicinelist',
  component:MedicinelistComponent
},
{
  path:'buymedicine',
  component:BuymedicineComponent
},
{
  path:'events',
  component:EventsComponent
},
{
  path:'updateMedicine/:medicineId',
  component:UpdatemedicineComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
