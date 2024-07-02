import { NgModule } from '@angular/core';
import { TodoComponent } from './components/todo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    exports: [TodoComponent],
    declarations: [TodoComponent],
    providers: [],
})
export class ToDoModule { }
