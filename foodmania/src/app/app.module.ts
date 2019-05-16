import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { loginComp } from './login';
import { FdTableComp } from './fd-table';
@NgModule({
  declarations: [
    AppComponent,
    loginComp,
    FdTableComp
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
