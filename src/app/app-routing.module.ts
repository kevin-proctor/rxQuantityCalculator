import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DrugInputComponent } from './drug-input/drug-input.component';
import { DrugOutputComponent } from './drug-output/drug-output.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'drug-input', component: DrugInputComponent},
  {path: 'drug-output', component: DrugOutputComponent},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
