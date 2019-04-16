import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SquareRootPipe } from './custome.pipe';
import { JsonPipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    SquareRootPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [JsonPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
