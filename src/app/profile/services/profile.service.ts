import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'https://6687000b83c983911b044d6e.mockapi.io/profiles-data';

  constructor(private http: HttpClient) {}

  saveProfile(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
