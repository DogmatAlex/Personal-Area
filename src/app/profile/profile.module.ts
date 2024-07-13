import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';


@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule, ProfileRoutingModule],
    exports: [ProfileComponent],
    declarations: [ProfileComponent],
    providers: [],
})
export class ProfileModule { }
