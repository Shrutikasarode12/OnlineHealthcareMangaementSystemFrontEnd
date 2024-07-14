import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalstoreService {

  baseUrl="http://localhost:8121";

  constructor(private http:HttpClient) { }
  addMedicine(medicine:Object):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}/M/addMedicine`,medicine);  
  }
  getAllMadicine():any
  {
    return this.http.get(`${this.baseUrl}/M/getAll`);
  }
  deleteMedicine(id:number):Observable<any>
  {

    console.log("inside service")
    return this.http.delete(`${this.baseUrl}/M/deleteMedicine/${id}`,{responseType:'text'});
  }
  serchMedicine(id:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/M/getOne/${id}`);
  }
  
  updateMedicine(medicine:Object):Observable<Object>
  {
    console.log("inside update sevice class");
    console.log(medicine);
    return this.http.put(`${this.baseUrl}/M/updateMedicine`,medicine);  
  }
}
