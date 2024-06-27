import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { DepartmentService } from '../../services/department.service';
import { User } from '../../models/user';
import { Department } from '../../models/department';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink]
})
export class UserFormComponent implements OnInit {
  user: User = { user_id: 0, username: '', full_name: '', department_id: 0 };
  departments: Department[] = [];
  isEdit = false;

  constructor(
    private userService: UserService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.userService.getUser(+id).subscribe(data => {
        this.user = data;
      });
    }
    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentService.getDepartments().subscribe(data => {
      this.departments = data;
    });
  }

  saveUser(): void {
    if (this.isEdit) {
      this.userService.updateUser(this.user.user_id, this.user)
        .subscribe(() => this.router.navigate(['/list_user']));
    } else {
      this.userService.createUser(this.user)
        .subscribe(() => this.router.navigate(['/list_user']));
    }
  }
}
