import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [LoginComponent],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule { }
