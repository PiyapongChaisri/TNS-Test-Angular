import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink]
})
export class DepartmentFormComponent implements OnInit {
  department: Department = { department_id: 0, department_name: '' , department_description: ''};
  isEdit = false;

  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.departmentService.getDepartment(+id).subscribe(data => {
        this.department = data;
      });
    }
  }

  saveDepartment(): void {
    if (this.isEdit) {
      this.departmentService.updateDepartment(this.department.department_id, this.department)
        .subscribe(() => this.router.navigate(['/list_department']));
    } else {
      this.departmentService.createDepartment(this.department)
        .subscribe(() => this.router.navigate(['/list_department']));
    }
  }
}
