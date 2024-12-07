import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.types';
import { HighlightCompleteTodoDirective } from '../../directives/highlight-complete-todo.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todos-items',
  imports: [ HighlightCompleteTodoDirective , UpperCasePipe ],
  templateUrl: './todos-items.component.html',
  styleUrl: './todos-items.component.css'
})
export class TodosItemsComponent {
  todo = input.required<Todo>();

  todoToggles = output<Todo>();

  todoClick(){
    this.todoToggles.emit(this.todo())
  }
}
