import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../services/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  public profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required)
  });

  public isEditMode: boolean = false;

  constructor(private profileService: ProfileService) {}

  public editProfile() {
    if (this.isEditMode) {
      if (this.profileForm.valid) {
        console.log(this.profileForm.value);
        this.saveProfileData(this.profileForm.value);  // Вызываем метод сохранения
        this.isEditMode = false;  // После сохранения переводим кнопку обратно в режим Изменить
      } else {
        console.log('Форма не валидна');
      }
    } else {
      this.isEditMode = true;
    }
  }

  public saveProfileData(formData: any) {
    this.profileService.saveProfile(formData)  // через сервис отправляем данные на сервер
      .subscribe(response => {
        console.log('Данные успешно сохранены на сервере:', response);
      }, error => {
        console.error('Ошибка при сохранении данных на сервере:', error);
      });
  }

  public ngOninit(): void {
    
  }
}
