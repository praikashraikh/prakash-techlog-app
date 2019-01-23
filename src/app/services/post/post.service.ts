import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getApiUrl(): string {
    return "https://prakash-techlog.herokuapp.com/api/v1/";
  }

  getPostList(query: any = {}, endPoint = 'post') {
    const url = this.getApiUrl() + endPoint;
    console.log(url);
    return this.http.get(url, {
        params: query
      })
      .pipe(retry(3));
  }
}
