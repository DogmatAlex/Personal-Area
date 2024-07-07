import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  http = inject(HttpClient);
  login(payload: {username: String, password: String}) {
    return this.http.post('https://6687000b83c983911b044d6e.mockapi.io/users', payload);
  }
}
