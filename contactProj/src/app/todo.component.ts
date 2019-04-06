import { Component } from '@angular/core';
import { User, UserClass } from './user.model';

@Component({
    selector: 'app-todo',
    // template: '',
    templateUrl: './todo.component.html'

})
export class TodoComponent {
    public name: string;
    public stefy:any;
    public contactList: Array<number>;
    public contactObj: Array<UserClass>;
    public exp = 1222;
    public userList: Array<User> = [
        { name: 'manoj', age: 29 },
        { name: 'Steffy', age: 2.1 },
        { name: 'Priyanka', age: 3 }
    ];
    constructor() {
        this.name = 'Priyanka';
        this.contactList = [
            323, 10, 20
        ];
        this.contactObj = [
            new UserClass('manoj', 34)
        ];
        console.log(this.getRT())
    }
    myTrackby(index: number, user: User): any {
        console.log(user, index);
    }
   getRT(){
    console.log(this.stefy) 
  }
}