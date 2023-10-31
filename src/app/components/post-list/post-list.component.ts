import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post/post.service';
import { Post } from '../../post/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  postList: Post[] = [];
  userId: number = parseInt(localStorage.getItem('id') as string);

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getAllPosts().subscribe((posts) => {
      this.postList = posts;
    });
  }

  deletePost(postId?: number) {
    if (postId) {
      this.postService.deletePost(postId).subscribe(() => {
        this.getPosts();
      });
    }
  }
}
