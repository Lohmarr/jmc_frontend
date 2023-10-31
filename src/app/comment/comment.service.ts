import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    // Check if the environment is production or development
    if (window.location.hostname === 'localhost') {
      this.baseUrl = 'http://localhost:8082/api/comments';
    } else {
      this.baseUrl = 'https://jmr-backend-f0da47b49588.herokuapp.com/api/comments';
    }
  }

  getAllComments() {
    return this.http.get<Comment[]>(`${this.baseUrl}`);
  }

  getComment(id: number) {
    return this.http.get<Comment>(`${this.baseUrl}/${id}`);
  }

  createComment(comment: Comment) {
    return this.http.post<Comment>(`${this.baseUrl}`, comment);
  }

  updateComment(comment: Comment) {
    return this.http.put<Comment>(`${this.baseUrl}/updateComment`, comment);
  }

  deleteComment(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
