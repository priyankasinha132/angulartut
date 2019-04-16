import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  redClass = false;
  cstmClass = {
    'classcustom': true
  };
  cstmStyle = {
    'font-size': '50px'
  };
  title = 'Today IS NICE SUNNY NigHT';
  mySalary = 156000.1234567;
  obj = { a: 10, b: 20 };
  date = new Date();
  constructor(public jp: JsonPipe) {
    console.log('obj', this.obj);
    console.log('obj', this.jp.transform(this.obj));
  }
  toogle() {
    this.redClass = !this.redClass;
    this.cstmClass['classcustom'] = !this.cstmClass['classcustom'];
  }
}
