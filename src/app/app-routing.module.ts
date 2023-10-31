import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth-component/auth.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { AuthGuard } from './auth/auth-guard';
import { PersonalPostsComponent } from './components/personal-posts/personal-posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';

const routes: Routes = [
  { path: "login", title: "Login", component: AuthComponent},
  { path: "dashboard", title: "Dashboard", component: PostListComponent, canActivate: [AuthGuard]},
  {path: "personal-posts", title: "My Posts", component:PersonalPostsComponent, canActivate: [AuthGuard]},
  {path: "add-post", title: "Add Post", component:AddPostComponent, canActivate: [AuthGuard]},
  {path: "update-post/:id", title: "Update Post", component:UpdatePostComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
