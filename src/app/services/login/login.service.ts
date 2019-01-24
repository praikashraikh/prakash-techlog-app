import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getApiUrl(): string {
    return "https://prakash-techlog.herokuapp.com/api/v1/admin/";
  }

  login(user:any = {}, endpoint = 'token') {
    return this.http.post<any>(this.getApiUrl() + endpoint, user)
      .pipe(map(res => {
        if (res.token && res.token !== 'NOT_VALID') {
          localStorage.setItem('token', res.token);
          return true
        }
        return false;
      }));
  }

  logout() {
    localStorage.removeItem('token');
  }
}
