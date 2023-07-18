import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  loginForm: FormGroup;
  invalidLogin = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.authService.authenticate(username, password).subscribe(
      {next: () => {
        // console.log("Auth success");
        this.router.navigate(['home']);
        this.invalidLogin = false;
      },
      error: () => {
        // console.log("Auth Failure");
        this.invalidLogin = true;
      }}
    );
    // console.log(sessionStorage);
  }

  // login1() {
  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   const username = this.loginForm.value.username;
  //   const password = this.loginForm.value.password;

  //   this.authService.authenticate1(username, password).subscribe({
  //     next : () => {
  //       console.log("Auth success");
  //     },
  //     error: () => {
  //       console.log("Auth Failure1");
  //     }
  //   });
  // }
}