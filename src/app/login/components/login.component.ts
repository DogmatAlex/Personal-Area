import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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

  isLoggedIn: boolean = false;

  public onSubmit() {
    if (this.isLoggedIn) {
      this.isLoggedIn = false; // Сбрасываем флаг аутентификации
      this.loginForm.reset(); // Очищаем поля формы
    } else {
      if (this.loginForm.valid) {
        this.isLoggedIn = true;  // Устанавливаем флаг аутентификации
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
