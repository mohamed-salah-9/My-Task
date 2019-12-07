import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/signup.service';
import { Employee} from 'src/app/employeeModel'
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  employees: Employee[] = [];
  constructor(
    private SS : SignupService, 
    private router: Router
  ) { 
   this.getAll()
  }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.SS.getAllemployees().subscribe(
      data => {
      this.employees = data
      console.log(this.employees)
    }
    );
  }    
 
  deleteemployee(id) {
    this.SS.deleteemployeesById(id).subscribe(
      res =>{
        this.getAll();
      }
    );
    
  }

}
