import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  public loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  loginService = inject(LoginService);

  private loginSubscription: Subscription | undefined;  // Хранение подписки

  isLoggedIn: boolean = false;

  public onSubmit() {
    if (this.isLoggedIn) {
      this.isLoggedIn = false;  // Сбрасываем флаг аутентификации
      this.loginForm.reset();  // Очищаем поля формы
      localStorage.removeItem('isLoggedIn');  // Удаляем значение из localStorage
    } else {
      if (this.loginForm.valid) {
        this.loginSubscription = this.loginService.login(this.loginForm.value) // Подписка на Observable
          .subscribe((response) => { 
              console.log('Успешная авторизация:', response);  // Обработка успешной авторизации
              this.isLoggedIn = true;  // Устанавливаем флаг аутентификации
              localStorage.setItem('isLoggedIn', 'true');  // Сохраняем состояние авторизации в localStorage
            }, (error) => {
              console.error('Ошибка авторизации:', error);
              
              localStorage.removeItem('isLoggedIn');  // Очищаем значение из localStorage при ошибке
                    alert('Ошибка авторизации. Попробуйте снова.');
            });

      } else {
        alert('Форма не валидна');
      }
    }
  }


  @ViewChild('passwordInput') passwordInput!: ElementRef;  // класс, кот. содержит ссылку на DOM элемент
  public passwordVisibility(event: MouseEvent): void {
    if (this.passwordInput.nativeElement.type === 'password') {   // свойство `ElementRef`, кот. дает доступ к исходному элементу DOM
      this.passwordInput.nativeElement.type = 'text';
    } else {
      this.passwordInput.nativeElement.type = 'password';
    }
    (event.target as HTMLElement).classList.toggle('visible');
  } 

  
  public ngOninit(): void {
    
  }
}
