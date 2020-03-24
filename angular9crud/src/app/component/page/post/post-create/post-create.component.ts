import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../../../../services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: PostService,
    private router: Router) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }
  addPost(title, contenu) {
    console.log('tmr');
    this.ps.addPost(title, contenu);
    this.router.navigate(['post']);
  }
  ngOnInit(): void {
  }
}
