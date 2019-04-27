import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html'
})
export class PhoneComponent {
  title = 'projectname';
  public loginForm: FormGroup;
  public loginFormFb: FormGroup;
  loginUsers = [];
  public gender = {
    male: 'Male',
    female: 'FeMale'
  }
  /**
   * @param fb 
   */
  constructor(public fb: FormBuilder) {
    this.createLoginForm();
    //using form builder
    this.loginFormFb = this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', [Validators.required, Validators.minLength(5)]),
    })
  }
  /**
   * 
   */
  createLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      gender: this.fb.control('Male', Validators.required),
    });
  }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
  submit() {
    if (this.loginForm.invalid) {
      return alert('your form invali')
    }
    this.submiTtodb();

  }
  submiTtodb() {
    this.loginUsers.push(this.loginForm.value);
  }
}
