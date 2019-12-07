import { Injectable } from '@angular/core';
import { Employee } from 'src/app/employeeModel';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url : "https://localhost:44332/api/"
  constructor( private http :  HttpClient) { }

  signup(data : Employee){
    return this.http.post("https://localhost:44332/api/employees", data).subscribe();
  } 
  getAllemployees() {
    return this.http.get<Employee[]>("https://localhost:44332/api/employees");
  }
  
  deleteemployeesById(id: string) {
    return this.http.delete("https://localhost:44332/api/employees/" + id);
  }

  getemployeesById(id: string) {
    return this.http.get<Employee>("https://localhost:44332/api/employees/" + id );
  }

  updateemployeesById(id: string, employe: any) {
    return this.http.put("https://localhost:44332/api/employees/" + id, employe);
  }
} 
   