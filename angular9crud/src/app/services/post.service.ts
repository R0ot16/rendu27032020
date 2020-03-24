import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
@NgModule()
export class PostService {
  uri = 'http://localhost:4000/posts';
  constructor(private http: HttpClient) { }
  addPost(title, contenu) {
    const obj = {
      title,
      contenu,
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
  getPosts() {
    return this
      .http
      .get(`${this.uri}`);
  }
  getPost(id){
    return this.http.get(`${this.uri}/single/${id}`);
  }
  deletePost(id){
    this.http.get(`${this.uri}/delete/${id}`).subscribe((res) => console.log('delete done'));
  }
  editPost(title, content, id){
    const obj = {
      title: title,
      content: content,
      id: id
    }
    this.http.post(`${this.uri}/edit`, obj).subscribe((res) => console.log('update success'));
  }
}
