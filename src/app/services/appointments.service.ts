import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  constructor(private http:HttpClient){  }

  
   baseUrl="http://localhost:8121";

   addAppintments(appointment:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/AB/addAppoiment`,appointment);  
  }

}
