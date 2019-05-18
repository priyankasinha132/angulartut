import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
})
export class SignupComponent {
    submitted = false;
    signup: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email, this.customControlError]),
        password: new FormControl('', [Validators.required, Validators.minLength(4)]),
        cfpassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
    }, { validators: this.babubhaiya });
    babubhaiya(form: FormGroup) {
        if (form.value.password !== form.value.cfpassword) {
            return { mycustommerror: 'this is not the same' };
        }
        return null;
    }
    customControlError(control: FormControl) {
        if (control.value.length > 5) {
            return { mycstmControl: 'this is is my contr the same' };
        }
        return null;
    }
    submit() {
        this.submitted = true;
        console.log(this.signup);
    }
    emailError() {
        return this.allErrors(this.signup.get('email'));
    }
    passwordError() {
        return this.allErrors(this.signup.get('password'));
    }
    cfpasswordError() {
        return this.allErrors(this.signup.get('cfpassword'));
    }
    allErrors(controls) {
        console.log(controls.errors);
        if (!controls.errors || !this.submitted) {
            return '';
        }
        if (controls.errors.required) {
            return 'this field is required';
        }
        if (controls.errors.mycstmControl) {
            return controls.errors.mycstmControl;
        }
        if (controls.errors.email) {
            return 'Invalid email';
        }
        if (controls.errors.minlength) {
            return 'minlength';
        }
    }

}
