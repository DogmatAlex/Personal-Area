import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://6687000b83c983911b044d6e.mockapi.io/users'; 

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> { 
    return this.http.post<any>(this.apiUrl, credentials);
  }
}