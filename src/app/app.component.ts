import { Component } from '@angular/core';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
[x: string]: any;
  title = 'personal-area';

  ngOnInit() {
    this.toDoList = JSON.parse(window.localStorage.getItem('toDoList') || '[]')
  }

  newToDo: string = '';

  public toDoList: { 
    id: number;
    name: string;
    description: string;
    isDone: boolean;
    status: number
  }[] = [];
   

  public addToDo() {
    const newId = this.toDoList.length > 0 ? Math.max(...this.toDoList.map(task => task.id)) + 1 : 1;
    this.toDoList.push({ 
      id: newId, // Присваиваем id
      name: this.newToDo, 
      status: 0,
      description: '', // Добавляем описание
      isDone: false  // Добавляем isDone
    });
    window.localStorage.setItem('toDoList', JSON.stringify(this.toDoList));
  }

  public markDone(task: { id: number; name: string; description: string; isDone: boolean; status: number }) {
    task.isDone = true;
    window.localStorage.setItem('toDoList', JSON.stringify(this.toDoList));
  }

  public removeToDo(removeTask: { id: number; name: string; description: string; isDone: boolean; status: number }) {
    this.toDoList = this.toDoList.filter(task => task.id !== removeTask.id);
    window.localStorage.setItem('toDoList', JSON.stringify(this.toDoList));
  }

}
