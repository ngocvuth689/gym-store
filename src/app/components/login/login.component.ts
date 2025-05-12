import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  login() {
    // Implement your login logic here
    console.log('Login button clicked');
  }

  forgotPassword() {
    // Implement your forgot password logic here
    console.log('Forgot password button clicked');
  }
  register() {
    // Implement your register logic here
    console.log('Register button clicked');
  }
  loginWithGoogle() {
    // Implement your Google login logic here
    console.log('Google login button clicked');
  }
  loginWithFacebook() {
    // Implement your Facebook login logic here
    console.log('Facebook login button clicked');
  }
  loginWithTwitter() {
    // Implement your Twitter login logic here
    console.log('Twitter login button clicked');
  }
}
