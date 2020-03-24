import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {


  constructor(private http: HttpClient) { }
  uri = 'http://localhost:4000/members';
  editMember(id: any) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }
  updateMember(MemberName: any, MemberBio: any, MemberAge: any, MemberMail: any, id: any) {
    const obj = {
      MemberName,
      MemberBio,
      MemberAge,
      MemberMail
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
  deleteMember(id: any) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
  addMember(MemberName: any, MemberBio: any, MemberAge: any, MemberMail: any) {
    const obj = {
      MemberName,
      MemberBio,
      MemberAge,
      MemberMail
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
  getMembers() {
    return this
      .http
      .get(`${this.uri}`);
  }
}
