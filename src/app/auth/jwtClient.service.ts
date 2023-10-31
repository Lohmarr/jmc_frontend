import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterRequest } from './models/RegisterRequest';
import { AuthenticationRequest } from './models/AuthenticationRequest';
import { AuthenticationResponse } from './models/AuthenticationResponse';

@Injectable({
  providedIn: 'root',
})
export class JwtClientService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    // Check if the environment is production or development
    if (window.location.hostname === 'localhost') {
      this.baseUrl = 'http://localhost:8082/api/auth';
    } else {
      this.baseUrl = 'https://jmr-backend-f0da47b49588.herokuapp.com/api/auth';
    }
  }

  register(request: RegisterRequest) {
    return this.http.post<AuthenticationResponse>(
      `${this.baseUrl}/register`,
      request
    );
  }

  authenticate(request: AuthenticationRequest) {
    return this.http.post<AuthenticationResponse>(
      `${this.baseUrl}/authenticate`,
      request
    );
  }
}
