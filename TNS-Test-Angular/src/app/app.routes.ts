import { Routes } from '@angular/router';
import { DepartmentListComponent} from './components/department-list/department-list.component';
import { DepartmentFormComponent } from './components/department-form/department-form.component';
import { UserListComponent} from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'list_department', component: DepartmentListComponent },
    { path: 'add_department', component: DepartmentFormComponent },
    { path: 'edit_department/:id', component: DepartmentFormComponent },
    { path: 'list_user', component: UserListComponent },
    { path: 'add_user', component: UserFormComponent },
    { path: 'edit_user/:id', component: UserFormComponent }
];