import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list-footer',
  template: `
    <p class='filter'>
      Show:
      <a (click)="all()">
        All
      </a>
      ,
      <a (click)="active()">
        Active
      </a>
      ,
      <a (click)="completed()">
        Completed
      </a>
    </p>
  `
})
export default class TodoListFooter {
  @Output() onFilter: EventEmitter<string> = new EventEmitter();

  all() {
    this.onFilter.emit('ALL');
  }

  active() {
    this.onFilter.emit('ACTIVE');
  }

  completed() {
    this.onFilter.emit('COMPLETED');
  }
}
