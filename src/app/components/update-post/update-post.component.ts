import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostRequest } from 'src/app/post/models/PostRequest';
import { PostService } from 'src/app/post/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  posterName = localStorage.getItem('name');
  posterUserId = parseInt(localStorage.getItem('id') || 'ERROR');
  updatedPostRequest: PostRequest = {
    posterName: this.posterName || undefined,
    userId: this.posterUserId,
  };
  notice?: string;

  constructor(private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    const postId = this.route.snapshot.params['id'];
    this.postService.getPost(postId).subscribe(post => {
      this.updatedPostRequest.title = post.title;
      this.updatedPostRequest.postUrl = post.postUrl;
    });
  }

  async updatePost() {
    let postId: number = 0;

    this.route.params.subscribe(params => {
      postId = params['id'];
    });

    if (!this.updatedPostRequest.title || !this.updatedPostRequest.postUrl) {
      this.notice = 'Please fill in all required fields.';
      return;
    }

    try {
      const post = await this.postService.updatePost(postId, this.updatedPostRequest).toPromise();
      console.log('Attempting to post', this.updatedPostRequest);

      if (post) {
        this.notice = 'Post updated successfully.';
      } else {
        this.notice = 'Failed to update post.';
      }
    } catch (error) {
      this.notice = 'An error occurred while updating the post.';
      console.error('Error updating post:', error);
    }
  }

}
