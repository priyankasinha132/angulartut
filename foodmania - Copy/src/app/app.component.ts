import { Component, ViewChild, ElementRef } from '@angular/core';
import { ProgressComponent } from './progress/progress.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('meredodobaap') meredodobaapObject: ProgressComponent;
  @ViewChild('gopikisan') gopikisan: ElementRef;
  title = 'foodmania';
  userList = [
    { name: 'manoj', age: 8 },
    { name: 'priyanka', age: 2 },
    { name: 'steffy', age: 3 }


  ];
  appBtn(data) {
    console.log(data);
  }
  incrment() {
    this.meredodobaapObject.incrment();
    this.gopikisan.nativeElement.style.backgroundColor = 'pink';
    this.gopikisan.nativeElement.html="sdasdasd"
  }
}
