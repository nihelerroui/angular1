import { NodeWithI18n } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employes : Employee[];
  //employee : Employee;

  constructor() { 
    this.employes = [
      { idEmployee : 1, nomEmployee : "Maitre" , numTel : 54986333 , dateNaissance : new Date("11/01/1988")},
      {idEmployee : 2, nomEmployee : "Médecin", numTel : 54999157, dateNaissance : new Date("06/05/1987")},
      {idEmployee : 3, nomEmployee : "Ingénieur", numTel :54571496 , dateNaissance : new Date("02/08/1970")}

    ];
  }
  listeEmployee() : Employee []{
    return this.employes;
  }
  ajouterEmployee(employee : Employee){
    this.employes.push(employee);
  }
  supprimerEmployee ( emplo : Employee){
    const index = this.employes.indexOf(emplo, 0);
    if (index >-1) {
      this.employes.splice(index, 1);
    }
  }
  consulterEmployee(id:number): Employee{
    return this.employes.find(p => p.idEmployee == id);
    // return this.employee;
  }
  updateEmployee(e:Employee){
    //console.log(e);
    this.supprimerEmployee(e);
    this.ajouterEmployee(e);
  }
  
}
