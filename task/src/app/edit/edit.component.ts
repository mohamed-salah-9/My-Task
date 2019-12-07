import { Component, OnInit } from '@angular/core';
import { Employee} from 'src/app/employeeModel'
import { from } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService} from 'src/app/signup.service'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employee: Employee={ID: '',Name:'',Salary: 0 , BirthDay:"",Gender:''};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private SS : SignupService
  ) { }

  ngOnInit() {
    this.getemployee()
  }

  getemployee() {
    const id = this.route.snapshot.params.id;
    this.SS.getemployeesById(id).subscribe(
      data =>{ this.employee = data
      }
    );
  } 
  Editemployee(myUpdatedData){
    const id = this.route.snapshot.params.id;
    this.SS.getemployeesById(id).subscribe(
      data => {
        this.employee = data;
        this.SS.updateemployeesById(id, myUpdatedData).subscribe();
      }
    );  
    this.router.navigate(['']);
  }
}
