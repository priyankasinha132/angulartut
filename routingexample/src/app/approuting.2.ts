import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { StudentComponent } from './student.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    { path: '', component: StudentComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: '**', component: StudentComponent }
];

@NgModule({
    declarations: [
        EmployeeComponent,
    ],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
        EmployeeComponent
    ]
})
export class CustomRoutingModule2 { }
