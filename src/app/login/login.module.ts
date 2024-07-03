import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule],
    exports: [LoginComponent],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule { }
