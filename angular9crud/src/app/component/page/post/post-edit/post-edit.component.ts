import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from './../../../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  single : any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute, private ps: PostService, private router: Router, private fb: FormBuilder) {
    this.createForm();
    this.route.params.subscribe(params => {
      this.ps.getPost(params.id).subscribe((res: any) => {
        this.single = res;
        console.log(this.single);
      });
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  editPost(title, contenu){
    this.ps.editPost(title, contenu, this.single._id);

    this.router.navigate(['/post']);
  }

}
