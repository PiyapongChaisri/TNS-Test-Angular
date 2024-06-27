import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class DepartmentListComponent implements OnInit {
  departments: Department[] = [];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe(data => {
      this.departments = data;
    });
  }

  deleteDepartment(id: number): void {
    this.departmentService.deleteDepartment(id).subscribe(() => {
      this.loadDepartments(); // Refresh the list after deletion
    });
  }
}
