import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {

  employes : Employee [];

  constructor(private employeeService : EmployeeService) {
    this.employes = employeeService.listeEmployee();
  
   }

  ngOnInit(): void {
  }
  supprimerEmployee(emplo : Employee){
    //console.log(emplo);
    let conf = confirm("Etes-vous sur ?");
    if (conf)
      this.employeeService.supprimerEmployee(emplo);
  }

}
