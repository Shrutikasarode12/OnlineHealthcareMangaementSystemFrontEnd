import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  baseUrl="http://localhost:8121";

  constructor(private http:HttpClient) { }
  addDoctor(doctor:Object):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}/D/addDoctor`,doctor);  
  }
  getAllDoctor():any{
    return this.http.get(`${this.baseUrl}/D/getAll`);
  }
  deleteDoctor(id:number):Observable<any>{

    console.log("inside service")
    return this.http.delete(`${this.baseUrl}/D/deleteDoctor/${id}`,{responseType:'text'});
  }
  
  serchDoctor(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/D/getOne/${id}`);
  }
 
}
