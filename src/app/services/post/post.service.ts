import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getApiUrl(): string {
    return "https://prakash-techlog.herokuapp.com/api/v1/admin/";
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

  savePost(mode: string, formData: any, tags: string[], postContent: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };

    console.log(formData);

    let body = {
      title: formData.title || '',
      author: formData.author || '',
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
