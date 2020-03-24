import { PostShowComponent } from './component/page/post/post-show/post-show.component';
import { PostEditComponent } from './component/page/post/post-edit/post-edit.component';
import { PostCreateComponent } from './component/page/post/post-create/post-create.component';
import { PostComponent } from './component/page/post/post.component';
import { HomeComponent } from './component/page/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberAddComponent } from './member-add/member-add.component';
import { MemberGetComponent } from './member-get/member-get.component';
import { MemberEditComponent } from './member-edit/member-edit.component';

const routes: Routes = [
  {
    path: 'member/create',
    component: MemberAddComponent
  },
  {
    path: 'edit/:id',
    component: MemberEditComponent
  },
  {
    path: 'members',
    component: MemberGetComponent
  },
  { path: 'home', component: HomeComponent },
  { path: 'post', component: PostComponent },
  { path: 'post/create', component: PostCreateComponent },
  { path: 'post/edit/:id', component: PostEditComponent },
  { path: 'post/show/:id', component: PostShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
