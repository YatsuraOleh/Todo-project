import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITodo } from 'src/app/shared/interfaces';
import { NewTodo } from 'src/app/shared/classes';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})

export class NewTodoComponent implements OnInit {
  public title: string;
  public description: string;

  @Output() submit: EventEmitter<ITodo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(): void {
    this.submit.emit(new NewTodo(this.title, this.description));
    this.title = '';
    this.description = '';
  }
}
