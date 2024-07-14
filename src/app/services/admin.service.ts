import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 

  constructor(private http:HttpClient)
  {
  }
  baseUrl="http://localhost:8121";

  addLogin(admin:Object):Observable<Object>
  {
   return this.http.post(`${this.baseUrl}/A/addAdmin`,admin);  
 }  
}
