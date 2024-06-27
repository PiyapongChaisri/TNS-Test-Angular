import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DepartmentListComponent} from './components/department-list/department-list.component';
import { DepartmentFormComponent } from './components/department-form/department-form.component';


@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterModule, DepartmentListComponent, DepartmentFormComponent]
})
export class AppComponent {}