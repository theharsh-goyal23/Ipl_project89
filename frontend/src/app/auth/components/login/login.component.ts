// import { Component, OnInit } from "@angular/core";
// import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

// @Component({
//     selector:'/app-logincomponent',
//     templateUrl:'./login.component.html',
//     styleUrls:['./login.component.scss']
// })
// export class LoginComponent implements OnInit {
//     loginForm!:FormGroup;
//     successMessage: string | null= null;
//     errorMessage: string | null= null;
// constructor(private fb :FormBuilder){}
//     ngOnInit(): void {
//         this.loginForm = this.fb.group({
//             username:['',Validators.required,this.usernameValidator],
//             password:['',Validators.required,this.passwordValidator]
//         })
//     }
//      passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
//         const password = control.value;
//         if (!password) {
//           return null;
//         }
//         const hasUpperCase = /[A-Z]/.test(password);
//         const hasNumber = /\d/.test(password);
//         const validLength = password.length >= 8;
//         if (!hasUpperCase || !hasNumber || !validLength) {
//           return { 'passwordInvalid': true };
//         }
//         return null;
//       }
      
//       // Custom validator for username
//        usernameValidator(control: AbstractControl): { [key: string]: boolean } | null {
//         const username = control.value;
//         if (!username) {
//           return null;
//         }
//         const hasSpecialChar = /[^a-zA-Z0-9]/.test(username);
//         if (hasSpecialChar) {
//           return { 'usernameInvalid': true };
//         }
//         return null;
//       }

//   onSubmit(){
//     if (this.loginForm.valid) {
//         this.successMessage = 'Login Successfull!';
//         this.errorMessage = null;
//       } else {
//         this.errorMessage = 'Invalid username or password.';
//         this.successMessage = null;
//       }
//   }
//   stimulateBackendLoginError(){
//     this.errorMessage ='Invalid username or password.'
//   }
// }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username } = this.loginForm.value;
      if (username === 'errorUser') {
        this.simulateBackendLoginError();
      } else {
        this.successMessage = 'Login successful!';
        this.errorMessage = '';
      }
    } else {
      this.successMessage = '';
      this.errorMessage = 'Please fill out all required fields correctly.';
    }
  }

  simulateBackendLoginError() {
    this.successMessage = '';
    this.errorMessage = 'Invalid username or password.';
  }
}