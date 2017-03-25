import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export default class ReversePipe implements PipeTransform {
  transform(todos: any[]) {
    if (todos) {
      return todos.slice().reverse();
    }
  }
}
