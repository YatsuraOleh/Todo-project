import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todosList: Array<ITodo>;
  @Output() toggleDescription: EventEmitter<ITodo> = new EventEmitter;
  @Output() toggleTodo: EventEmitter<ITodo> = new EventEmitter;
  @Output() delete: EventEmitter<ITodo> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  public onToggleTodo(item: ITodo): void {
    this.toggleTodo.emit(item);
  }
  public onToggleDescription(item: ITodo): void {
    this.toggleDescription.emit(item);
  }
  public onDeleteTodo(item: ITodo): void {
    this.delete.emit(item);
  }
}
