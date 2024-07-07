import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  public saveProfile() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    } else {
      console.log('Форма не валидна');
    }
    
  }

  public ngOninit(): void {
    
  }
}
