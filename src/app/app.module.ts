import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { AddDoctorsComponent } from './components/add-doctors/add-doctors.component';
import { DoctorlistComponent } from './components/doctorlist/doctorlist.component';
import { BuymedicineComponent } from './components/buymedicine/buymedicine.component';
import { MedicalstoreComponent } from './components/medicalstore/medicalstore.component';
import { HeaderComponent } from './components/header/header.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { PatientsComponent } from './components/patients/patients.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { AddmedicineComponent } from './components/addmedicine/addmedicine.component';
import { MedicinelistComponent } from './components/medicinelist/medicinelist.component';
import { UpdatemedicineComponent } from './components/updatemedicine/updatemedicine.component';
import { DeletemedicineComponent } from './components/deletemedicine/deletemedicine.component';
import { EventsComponent } from './components/events/events.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,

    ServicesComponent,
    ContactsComponent,
         LoginComponent,
         HomeComponent,
         AppointmentComponent,
         DashbordComponent,
         AddDoctorsComponent,
         DoctorlistComponent,
         BuymedicineComponent,
         MedicalstoreComponent,
         HeaderComponent,
         AdmindashboardComponent,
         PatientsComponent,
         ScheduleComponent,
         DoctorComponent,
         AddmedicineComponent,
         MedicinelistComponent,
         UpdatemedicineComponent,
         DeletemedicineComponent,
         EventsComponent,
         FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
