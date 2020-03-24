import { PostService } from '../../../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.css']
})
export class PostShowComponent implements OnInit {
  single: any = {};
  constructor(private fb: FormBuilder, private ps: PostService,
    private router: Router, private route: ActivatedRoute) {
      this.route.params.subscribe(params => {
        this.ps.getPost(params.id).subscribe((res: any) => {
          this.single = res;
        });
      });
  }
  ngOnInit(): void {
  }
}
