import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import Post from '../../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[];
  constructor(private ps: PostService) { }
  ngOnInit() {
    this.ps
      .getPosts()
      .subscribe((data: Post[]) => {
        this.posts = data;
      });
  }

  deletePost(id){
    this.ps.deletePost(id);
  }
}
