import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { PhoneComponent } from "./phone.component";
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const myroute: Routes = [
  { path: '', component: PhoneComponent },

]


@NgModule({
  declarations: [
    PhoneComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(myroute)
  ],
  providers: [],
})
export class PhoneModule { }
