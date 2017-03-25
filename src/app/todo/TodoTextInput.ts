import { Component, Input, Output, EventEmitter } from '@angular/core';

const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

@Component({
  selector: 'todo-text-input',
  template: `
  <input
    [ngClass]="className"
    [(ngModel)]="text"
    (keydown.enter)="_handleEnter()"
    (keydown.esc)="_handleEsc()"
    placeholder="{{placeholder}}"
    name="todo-input"
  />
  `
})
export default class TodoTextInput {
  @Input() placeholder: string;
  @Input() initialValue: string;
  @Input() className: string;
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<string> = new EventEmitter();

  text: string;

  ngOnInit() {
    this.text = this.initialValue || '';
  }

  _commitChanges() {
    const newText = this.text.trim();

    if (newText === '') {
      this.onDelete.emit(null);
    } else if (newText === this.initialValue) {
      this.onCancel.emit(null);
    } else if (newText !== '') {
      this.onSave.emit(this.text);
      this.text = '';
    }
  }

  _handleEnter() {
    this._commitChanges();
  }

  _handleEsc() {
    this.onCancel.emit(null);
    this.text = '';
  }
}
