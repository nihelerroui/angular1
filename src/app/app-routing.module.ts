import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployesComponent } from './employes/employes.component';
import { AddEmployesComponent } from './add-employes/add-employes.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  {path : "employes" , component : EmployesComponent},
  {path : "add-employes" , component : AddEmployesComponent},
  {path: "updateEmployee/:id", component: UpdateEmployeeComponent},
  {path : "", redirectTo: "employes", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
