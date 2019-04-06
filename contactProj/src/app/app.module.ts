import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TodoComponent} from './todo.component';
import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";
import {ContactComponent} from './contact.component';

@NgModule({
  declarations: [
    AppComponent, 
    TodoComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
