import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn');  //Проверяем, авторизован ли пользователь
    if (isLoggedIn) {
      return true;  // Разрешаем доступ к другим страницам
    } else {
      this.router.navigate(['/login']);  // Перенаправляем на страницу входа
      return false;
    }
  }
}
