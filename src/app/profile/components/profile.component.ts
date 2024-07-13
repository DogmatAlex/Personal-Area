import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ProfileService } from '../services/profile.service';
import { onlyLettersValidator, ageValidator } from './custom-validators';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  public profileForm = new FormGroup({
    name: new FormControl({value: '', disabled: true}, [Validators.required, onlyLettersValidator()]),
    lastName: new FormControl({value: '', disabled: true}, [Validators.required, onlyLettersValidator()]),
    dateOfBirth: new FormControl({value: '', disabled: true}, [Validators.required, ageValidator(10)]),
    email: new FormControl({value: '', disabled: true}, [Validators.required, Validators.email]),
    city: new FormControl({value: '', disabled: true}, Validators.required)
  });

  public isEditMode: boolean = false;

  constructor(private profileService: ProfileService) {}

  public editProfile() {
    if (this.isEditMode) {
      if (this.profileForm.valid) {
        console.log(this.profileForm.value);
        this.saveProfileData(this.profileForm.value);  // Вызываем метод сохранения
        this.isEditMode = false; // выход из режима редактирования после сохранения
      } else {
        console.log('Форма не валидна');
      }
    } else {
      this.isEditMode = true;   // вход в режим редактирования при нажатии на кнопку Изменить
      this.profileForm.enable();  // Включаем поля формы для редактирования
    }
  }

  public saveProfileData(formData: any) {
    this.profileService.saveProfile(formData)  // через сервис отправляем данные на сервер
      .subscribe(response => {
        console.log('Данные успешно сохранены на сервере:', response);
        this.profileForm.disable();  // Отключаем поля формы после сохранения
      }, error => {
        console.error('Ошибка при сохранении данных на сервере:', error);
      });
  }

  public ngOninit(): void {
    this.profileForm = JSON.parse(window.localStorage.getItem('profileForm') || '[]')
  }
}
