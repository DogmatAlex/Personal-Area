import { AbstractControl, ValidatorFn } from '@angular/forms';


export function onlyLettersValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = /^[a-zA-Z]+$/.test(control.value);
    return valid ? null : { onlyLetters: true };
  };
}
