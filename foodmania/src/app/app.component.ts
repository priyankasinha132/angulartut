import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodmania';
  userList = [
    { name: 'manoj', age: 8 },
    { name: 'priyanka', age: 2 },
    { name: 'steffy', age: 3 }


  ];
}
