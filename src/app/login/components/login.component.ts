import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authService = inject(AuthService);

  public loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  public onSubmit() {

    if (this.loginForm.valid) {
    //@ts-ignore
    this.authService.login(this.loginForm.value)
    } else {
      alert('Форма не валидна');
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
