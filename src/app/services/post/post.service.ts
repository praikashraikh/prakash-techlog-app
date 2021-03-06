import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts = new Subject<object>();
  posts$ = this.posts.asObservable();

  constructor(private http: HttpClient) { }

  getApiUrl(): string {
    return "https://prakash-techlog.herokuapp.com/api/v1/admin/";
    //return "http://localhost:3000/api/v1/admin/";
  }

  getPostList(query: any = {}, endPoint = 'post') {
    const url = this.getApiUrl() + endPoint;
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` })
    };

    return this.http.get(url, {
      params: query, headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` })
    })
      .pipe(retry(3));
  }

  loadPosts() {
    this.getPostList().subscribe(posts => {
      this.posts.next(posts);
    },
    err => {
      console.log(err)
    });
  }

  savePost(mode: string, formData: any, tags: string[], postContent: string = '', imageUrl: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };

    let body = {
      title: formData.title || '',
      author: formData.author || '',
      imageUrl: imageUrl || '',
      post: postContent || '',
      tags: tags || [],
      createdDateTime: new Date()
    };

    if (mode === 'add') {
      return this.http.post(`${this.getApiUrl()}post`, body, httpOptions);
    } else {
      return this.http.put(`${this.getApiUrl()}post/${formData.id}`, body, httpOptions);
    }
  }

  deletePost(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` })
    };
    return this.http.delete(`${this.getApiUrl()}post/${id}`, httpOptions);
  }
}
