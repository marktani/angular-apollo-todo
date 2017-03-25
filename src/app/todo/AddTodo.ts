import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'add-todo',
  template: `
    <todo-text-input
      className='new-todo'
      (onSave)="_handleSave($event)"
      placeholder='Add...'>
    </todo-text-input>
  `
})
export default class AddTodo {
  @Output() onSave: EventEmitter<string> = new EventEmitter();

  _handleSave (text: string) {
    this.onSave.emit(text);
  }
}
