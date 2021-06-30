import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loginForm: FormGroup | undefined;
  submitted = false;

  error_messages = {
    'fname': [
      {type: 'required', message: 'First Name is required.'},
    ],

    'lname': [
      {type: 'required', message: 'Last Name is required.'},
    ],

    'email': [
      {type: 'required', message: 'Email is required.'},
      {type: 'minlength', message: 'Email length.'},
      {type: 'maxlength', message: 'Email length.'},
      {type: 'required', message: 'please enter a valid email address.'},
    ],

    'password': [
      {type: 'required', message: 'password is required.'},
      {type: 'minlength', message: 'password length.'},
      {type: 'maxlength', message: 'password length.'},
    ],
    'confirmpassword': [
      {type: 'required', message: 'password is required.'},
      {type: 'minlength', message: 'password length.'},
      {type: 'maxlength', message: 'password length.'},
    ],
  }

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        fname: new FormControl('',
           [
             Validators.required,
             Validators.minLength(2),
           ]
          ),
        lname: new FormControl('',
           [
             Validators.required,
             Validators.minLength(2),
           ]
          ),
        email: new FormControl('',
           [
             Validators.required,
             Validators.email,
             Validators.minLength(6),
             Validators.maxLength(30)
           ]
          ),
        password: new FormControl('',
           [
             Validators.required,
             Validators.minLength(6),
             Validators.maxLength(30)
           ]
          ),
        confirmpassword: new FormControl('',
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(30)
            ]
          ),
      }, {
        validators: this.passwordMatch.bind(this)
      });
  }

  submit() {
    this.submitted = true;
    // @ts-ignore
    let data = this.loginForm.value;
    console.log(data)
  }

  passwordMatch(formGroup: FormGroup) {
    // @ts-ignore
    const {value: password} = formGroup.get('password');
    // @ts-ignore
    const {value: confirmPassword} = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : {passwordNotMatch: true};
  }

  get fname(){
    return this.loginForm?.get('fname')
  }

  get lname(){
    return this.loginForm?.get('lname')
  }

  get email(){
    return this.loginForm?.get('email')
  }

  get password(){
    return this.loginForm?.get('password')
  }

  get confirmpassword(){
    return this.loginForm?.get('confirmpassword')
  }
}
