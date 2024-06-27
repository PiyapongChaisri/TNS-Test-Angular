import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DepartmentService } from '../../services/department.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.populateDepartmentNames();
    });
  }

  populateDepartmentNames() {
    this.users.forEach(user => {
      this.departmentService.getDepartment(user.department_id).subscribe(department => {
        user.department_name = department.department_name;
      });
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers(); // Refresh the list after deletion
    });
  }
}

