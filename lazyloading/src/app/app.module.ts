import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { ContactComponent } from "./contact/contact.component";
import { RouterModule, Routes } from '@angular/router';

const myroute: Routes = [
  { path: '', component: ContactComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'phone', loadChildren:'./phone/phone.module#PhoneModule' },
  { path: '**', component: ContactComponent }

]


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
