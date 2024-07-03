import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/components/profile.component';
import { LoginComponent } from './login/components/login.component';
import { TodoComponent } from './todo/components/todo.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
    // loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
