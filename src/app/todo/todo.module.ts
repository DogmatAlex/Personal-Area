import { NgModule } from '@angular/core';
import { TodoComponent } from './components/todo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodoRoutingModule } from './todo-routing.module';


@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, TodoRoutingModule],
    exports: [TodoComponent],
    declarations: [TodoComponent],
    providers: [],
})
export class ToDoModule { }
