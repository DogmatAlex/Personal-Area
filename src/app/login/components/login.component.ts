import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authService = inject(AuthService)

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

  public passwordVisibility(event: MouseEvent): void {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
    (event.target as HTMLElement).classList.toggle('visible');
}


  public ngOninit(): void {
    
  }
}
