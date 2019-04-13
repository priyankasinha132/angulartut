import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { StudentComponent } from './student.component';
import { CustomRoutingModule2 } from './approuting.2';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    { path: 'student', component: StudentComponent },
];

@NgModule({
    declarations: [
        StudentComponent,
    ],
    imports: [
        RouterModule.forRoot(routes),
        CustomRoutingModule2
    ],
    exports: [
        RouterModule,
        StudentComponent,
        CustomRoutingModule2
    ]
})
export class CustomRoutingModule { }
