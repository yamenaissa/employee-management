import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  imports:[FormsModule],
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  updateEmployee() {
    throw new Error('Method not implemented.');
  }
  id!: number;
  employee: Employee = {
    firstName: '',
    lastName: '',
    emailId: '',
    email: undefined
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(
      (data) => {
        this.employee = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/employees']);
      },
      (error) => console.log(error)
    );
  }

  goToList() {
    this.router.navigate(['/employees']);
  }
}
