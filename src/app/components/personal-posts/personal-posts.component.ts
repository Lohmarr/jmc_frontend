import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post/models/Post';
import { PostService } from 'src/app/post/post.service';

@Component({
  selector: 'app-personal-posts',
  templateUrl: './personal-posts.component.html',
  styleUrls: ['./personal-posts.component.css']
})
export class PersonalPostsComponent implements OnInit {

  postList: Post[] = [];
  userId: number = parseInt(localStorage.getItem('id') as string);

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPersonalPosts();
  }

  getPersonalPosts(): void {
    const userId = parseInt(localStorage.getItem('id') ?? 'ERROR');

    this.postService.getAllPosts().subscribe(posts => {
      this.postList = posts.filter(post => post.userId === userId);
    });
  }

  deletePost(postId?: number) {
    if (postId) {
      this.postService.deletePost(postId).subscribe(() => {
        this.getPersonalPosts();
      });
    }
  }
}
