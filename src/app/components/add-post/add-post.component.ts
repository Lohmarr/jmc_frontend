import { PostRequest } from './../../post/models/PostRequest';
import { PostService } from './../../post/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  posterName = localStorage.getItem('name');
  posterUserId = parseInt(localStorage.getItem('id') || 'ERROR');
  postRequest: PostRequest = {
    posterName: this.posterName || undefined,
    userId: this.posterUserId,
  };
  notice?: string;

  constructor(private postService: PostService) {}

  ngOnInit() {

  }

  async addPost() {
    if (!this.postRequest.title || !this.postRequest.postUrl) {
      this.notice = 'Please fill in all required fields.';
      return;
    }

    try {
      const post = await this.postService.addPost(this.postRequest).toPromise();
      console.log('Attempting to post', this.postRequest);

      if (post) {
        this.notice = 'Post added successfully.';
      } else {
        this.notice = 'Failed to add post.';
      }
    } catch (error) {
      this.notice = 'An error occurred while adding the post.';
      console.error('Error adding post:', error);
    }
  }
}
