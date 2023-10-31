import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    // Check if the environment is production or development
    if (window.location.hostname === 'localhost') {
      this.baseUrl = 'http://localhost:8082/api/users';
    } else {
      this.baseUrl = 'https://jmr-backend-f0da47b49588.herokuapp.com/api/users';
    }
  }

  getAllUsers() {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  getUserById(id: number) {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  addUser(user: User) {
    return this.http.post<User>(`${this.baseUrl}`, user);
  }

  updateUser(id: number, user: User) {
    return this.http.put<User>(`${this.baseUrl}/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
