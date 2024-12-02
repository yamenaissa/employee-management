import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employee.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  imports:[NgIf],
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id!: number;
  employee!: Employee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id)
      .subscribe(
        data => {
          this.employee = data;
        },
        error => console.log(error)
      );
  }

  goToList() {
    this.router.navigate(['/employees']);
  }
}