import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from 'src/app/registration/registration.component';
import  {AllComponent } from 'src/app/all/all.component';
import {EditComponent} from 'src/app/edit/edit.component'
import { from } from 'rxjs';

const routes: Routes = [
  {path : "" , component : AllComponent},
  {path : "signup" , component : RegistrationComponent},
  {path : "edit/:id" , component : EditComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
