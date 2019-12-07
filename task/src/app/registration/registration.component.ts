import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/signup.service'
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor( private SS:SignupService,
    private router: Router
    ) { }

  ngOnInit() {
  }
  addemployee(value){
    this.SS.signup(value);
    this.router.navigate(['']);
  }

}
