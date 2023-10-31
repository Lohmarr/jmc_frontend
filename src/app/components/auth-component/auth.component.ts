import { AuthenticationRequest } from './../../auth/models/AuthenticationRequest';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user/User';
import { JwtClientService } from 'src/app/auth/jwtClient.service';
import { AuthenticationResponse } from 'src/app/auth/models/AuthenticationResponse';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/auth/models/RegisterRequest';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  authenticationRequest: AuthenticationRequest = {};
  registerRequest: RegisterRequest = {};
  notice?: string;

  constructor(private jwtService: JwtClientService, private userService: UserService, private router: Router) {}

  signup() {
    if (!this.registerRequest.name || !this.registerRequest.email || !this.registerRequest.password) {
      this.notice = 'Please fill in all required fields.';
      return;
    }

    this.jwtService.register(this.registerRequest).subscribe({
      next: (response: AuthenticationResponse) => {
        if (response.token != null && response.token != '') {
          this.notice = "Registration successful. Please login.";
        } else {
          this.notice = "Registration failed";
        }
      },
    });
    console.log('Attempting to register', this.registerRequest);
  }

  login() {
    if (!this.authenticationRequest.email || !this.authenticationRequest.password) {
      this.notice = 'Please fill in all required fields.';
      return;
    }


    this.jwtService.authenticate(this.authenticationRequest).subscribe({
      next: (response: AuthenticationResponse) => {
        if (response.token != null && response.token != '') {
          localStorage.setItem('token', response.token);
          localStorage.setItem('name', response.name || 'ERROR');
          localStorage.setItem('email', response.email || 'ERROR');
          localStorage.setItem('id', response.id?.toString() || 'ERROR');
          this.notice = "";
          this.router.navigate(['dashboard']);
        } else {
          this.notice = "Login failed";
        }
      },
    });
    console.log('Attempting to login', this.authenticationRequest);
  }
}
