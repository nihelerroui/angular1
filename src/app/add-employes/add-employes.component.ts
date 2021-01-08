import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-add-employes',
  templateUrl: './add-employes.component.html',
  styleUrls: ['./add-employes.component.css']
})
export class AddEmployesComponent implements OnInit {
  newEmployee = new Employee();

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    }
    addEmployee() {
      //console.log(this.newEmployee);
      this.employeeService.ajouterEmployee(this.newEmployee);
    }
}
