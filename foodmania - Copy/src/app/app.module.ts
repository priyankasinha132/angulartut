import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { loginComp } from './login';
import { signupComp } from './signup';
import { FdTableComp } from './fd-table';
import { ProgressComponent } from './progress/progress.component';
import { RouterModule, Routes } from '@angular/router';
const myRoutes: Routes = [
  { path: 'login', component: loginComp },
  { path: 'signup', component: signupComp }

]
@NgModule({
  declarations: [
    AppComponent,
    loginComp,
    ProgressComponent,
    FdTableComp,
    signupComp
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
