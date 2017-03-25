import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo',
  template: `
    <li
      [ngClass]="{'completed': todo.complete, 'editing': isEditing}">
      <div class='view'>
        <input
          class='toggle'
          (change)="_handleCompleteChange($event)"
          [checked]="todo.complete"
          type='checkbox'
        />
        <label
          (dblclick)="_handleLabelDoubleClick()">
          {{ todo.text }}
        </label>
        <button
          class='destroy'
          (click)="_handleDestroyClick()">
        </button>
      </div>
      <todo-text-input
        *ngIf="isEditing"
        className="edit"
        [initialValue]="todo.text"
        (onCancel)="_handleTextInputCancel()"
        (onDelete)="_handleTextInputDelete()"
        (onSave)="_handleTextInputSave($event)">
      </todo-text-input>
    </li>
  `
})
export default class Todo {
  @Input() todo: any;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Output() onRename: EventEmitter<string> = new EventEmitter();
  @Output() onToggle: EventEmitter<boolean> = new EventEmitter();
  isEditing: boolean = false;

  _setEditMode(shouldEdit: boolean) {
    this.isEditing = shouldEdit;
  }

  _removeTodo() {
    this.onDelete.emit(null);
  }

  _handleCompleteChange(event) {
    this.onToggle.emit(event.target.checked);
  }

  _handleDestroyClick() {
    this._removeTodo();
  }

  _handleLabelDoubleClick() {
    this._setEditMode(true);
  }

  _handleTextInputCancel() {
    this._setEditMode(false);
  }

  _handleTextInputDelete() {
    this._setEditMode(false);
    this._removeTodo();
  }

  _handleTextInputSave(newText: string) {
    this._setEditMode(false);
    this.onRename.emit(newText);
  }
}
