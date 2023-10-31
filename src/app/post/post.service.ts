import { AuthGuard } from 'src/app/auth/auth-guard';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './models/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl: string;
  private token = localStorage.getItem('token');

  constructor(private http: HttpClient, private auth: AuthGuard) {
    // Check if the environment is production or development
    if (window.location.hostname === 'localhost') {
      this.baseUrl = 'http://localhost:8082/api/posts';
    } else {
      this.baseUrl = 'https://jmr-backend-f0da47b49588.herokuapp.com/api/posts';
    }
  }

  getAllPosts() {
    const headers = this.auth.getHeaders(this.token);
    return this.http.get<Post[]>(`${this.baseUrl}`, { headers });
  }

  getPost(id: number) {
    const headers = this.auth.getHeaders(this.token);
    return this.http.get<Post>(`${this.baseUrl}/${id}`, { headers });
  }

  addPost(post: Post) {
    const headers = this.auth.getHeaders(this.token);
    return this.http.post<Post>(`${this.baseUrl}`, post, { headers });
  }

  updatePost(id: number, post: Post) {
    const headers = this.auth.getHeaders(this.token);
    return this.http.put<Post>(`${this.baseUrl}/${id}`, post, { headers });
  }

  addVote(vote: any) {
    const headers = this.auth.getHeaders(this.token);
    return this.http.put<string>(`${this.baseUrl}/upvote`, vote, { headers });
  }

  deletePost(id: number) {
    const headers = this.auth.getHeaders(this.token);
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { headers });
  }
}
