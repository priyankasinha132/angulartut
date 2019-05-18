import { Component } from '@angular/core';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public loginClass = 'fd-loginh1';
    public applyclass = true;
    public myObj = {
        'fd-loginh1': true,
        'ftsize': true
    };
    public myObjStyle = {
        'font-size': '40px',
        'background-color': 'pink'
    }
    resetClass() {
        this.applyclass = !this.applyclass;
        this.myObj.ftsize = false;
    }
}
