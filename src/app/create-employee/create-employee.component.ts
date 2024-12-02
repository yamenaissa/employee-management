import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  imports:[FormsModule, NgIf],
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = {
    firstName: '',
    lastName: '',
    emailId: '',
    active: true,
    email: undefined
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onSubmit() {
    this.employeeService.createEmployee(this.employee).subscribe(
      () => {
        this.router.navigate(['/employees']);
      },
      error => {
        console.error('Erreur lors de la création de l\'employé', error);
      }
    );
  }

  cancel() {
    this.router.navigate(['/employees']);
  }
}