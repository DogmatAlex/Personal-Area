import { Component } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
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
    status: number;
    date: Date
  }[] = [];


  selectDate: Date = new Date();
   
  public addToDo() {
    if (this.selectDate < new Date()) { 
      alert('Вы не можете выбрать дату из прошлого');
      return;
    }
    
    const newId = this.toDoList.length > 0 ? Math.max(...this.toDoList.map(task => task.id)) + 1 : 1;
    this.toDoList.push({ 
      id: newId, // Присваиваем id
      name: this.newToDo, 
      status: 0,
      description: '', // Добавляем описание
      isDone: false,  // Добавляем isDone
      date: this.selectDate 
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
