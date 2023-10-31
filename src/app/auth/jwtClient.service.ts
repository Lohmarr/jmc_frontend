import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterRequest } from './models/RegisterRequest';
import { AuthenticationRequest } from './models/AuthenticationRequest';
import { AuthenticationResponse } from './models/AuthenticationResponse';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {
  private baseUrl = 'http://localhost:8082/api/auth';

constructor(private http:HttpClient) { }

register(request: RegisterRequest) {
  return this.http.post<AuthenticationResponse>(`${this.baseUrl}/register`, request);
}

authenticate(request: AuthenticationRequest) {
  return this.http.post<AuthenticationResponse>(`${this.baseUrl}/authenticate`, request);
}
}
