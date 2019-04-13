import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formexample';
  mytitle = '';
  btitle = '';
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      playing: new FormControl(''),
      batting: new FormControl(''),
      Swimming: new FormControl(''),
      Bowling: new FormControl(''),
      address: new FormGroup({
        line1: new FormControl(''),
        line2: new FormGroup({
          pincode: new FormControl('')
        }),
      })
    });
  }
  get password() {
    return this.loginForm.get('password');
  }
  submit() {
    console.log(this.password);
    console.log(this.loginForm);

  }
  checkboxSubmit() {
    console.log(this.loginForm);

  }
  mySubmit(data) {
    console.log(data)
    console.log(this.mytitle);
    console.log(this.btitle);
  }
}
