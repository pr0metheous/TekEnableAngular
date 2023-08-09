import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' }, 
  { path: 'signup', component: SignupFormComponent }, 
  // Other routes if you have more pages
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
