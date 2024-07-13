import { AbstractControl, ValidatorFn } from '@angular/forms';


export function onlyLettersValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = /^[a-zA-Z]+$/.test(control.value);
    return valid ? null : { onlyLetters: true };
  };
}

export function maxLengthValidator(maxLength: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value && control.value.length > maxLength) {
      return { maxLength: true };
    }
    return null;
  };
}