import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [ProfileComponent],
    declarations: [ProfileComponent],
    providers: [],
})
export class ProfileModule { }
