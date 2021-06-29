import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Auth} from "../auth";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // submitted = false;
  // countryList = [
  //   {id: 1, name: "Viet Nam"},
  //   {id: 2, name: "Japan"},
  //   {id: 3, name: "Korea"},
  //   {id: 4, name: "USA"},
  //   {id: 5, name: "Canada"},
  // ]
  type: string | undefined;
  message: string | undefined;
  registerForm: FormGroup;
  submitted: boolean = false;
  // registerForm = new FormGroup({
  //   email: new FormControl(),
  //   password: new FormControl(),
  //   confirmPassword: new FormControl(),
  //   fname: new FormControl(),
  //   lname: new FormControl(),
  // });


  error_messages = {
    'fname': [
      { type: 'required', message: 'First Name is required.' },
    ],

    'lname': [
      { type: 'required', message: 'Last Name is required.' }
    ],

    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length.' },
      { type: 'maxlength', message: 'Email length.' },
      { type: 'required', message: 'please enter a valid email address.' }
    ],

    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],

    'confirmPassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],
  };


  constructor(
    public formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      age: new FormControl('', Validators.compose([
        Validators.required, Validators.min(18)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
    }, {
      validators: this.password.bind(this)
    });
  }

  ngOnInit() {
  }

  password(formGroup: FormGroup) {
    // @ts-ignore
    const { value: password } = formGroup.get('password');
    // @ts-ignore
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  // ngOnInit(): void {
  //   this.contactForm = this.fb.group({
  //     email: ['',[Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmPassword: ['',[Validators.required]],
  //     age: ['', [Validators.required, Validators.min(18)]],
  //     gender: ['', [Validators.required]],
  //     country: ['', [Validators.required]],
  //     phone: ['', [Validators.required, Validators.pattern('(84|0[3|5|7|8|9])+([0-9]{8})')]]
  //   })
  // }

  submit() {
    this.submitted = true;
    let data = this.registerForm.value;
    console.log(data);
  }

}
