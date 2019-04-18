import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getApiUrl(): string {
    return "http://localhost:3000/api/v1/admin/";
  }

  public uploadImage(image: File): Observable<Object> {
    const formData = new FormData();

    formData.append('image', image);
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` })
    };

    return this.http.post( this.getApiUrl() + 'upload', formData, httpOptions);
  }
}
