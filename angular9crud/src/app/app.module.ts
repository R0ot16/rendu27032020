import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberAddComponent } from './member-add/member-add.component';
import { MemberGetComponent } from './member-get/member-get.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MemberService } from './member.service';
import { HomeComponent } from './component/page/home/home.component';
import { PostComponent } from './component/page/post/post.component';
import { FooterComponent } from './component/include/footer/footer.component';
import { MainHeaderComponent } from './component/include/main-header/main-header.component';
import { SideBarComponent } from './component/include/side-bar/side-bar.component';
import { PostCreateComponent } from './component/page/post/post-create/post-create.component';
import { PostEditComponent } from './component/page/post/post-edit/post-edit.component';
import { PostShowComponent } from './component/page/post/post-show/post-show.component';

import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    MemberAddComponent,
    MemberGetComponent,
    MemberEditComponent,
    HomeComponent,
    PostComponent,
    FooterComponent,
    MainHeaderComponent,
    SideBarComponent,
    PostCreateComponent,
    PostEditComponent,
    PostShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    PostService
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
