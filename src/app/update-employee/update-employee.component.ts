import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styles: [
  ]
})
export class UpdateEmployeeComponent implements OnInit {
  currentEmployee = new Employee();

  constructor(private activatedRoute: ActivatedRoute , 
              private router : Router,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params.id);
    this.currentEmployee = this.employeeService.consulterEmployee(this.activatedRoute.snapshot.params.id);
    console.log(this.currentEmployee);
  }
  updateEmployee(){
    //console.log(this.currentEmployee);
    this.employeeService.updateEmployee(this.currentEmployee);
    this.router.navigate(['employee']);
  }

}
