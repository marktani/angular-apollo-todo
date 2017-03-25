import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ApolloModule } from 'apollo-angular';
import { routes } from './routes';
import { provideClient } from './client';

import { AppComponent } from './app.component';
import TodoApp from './todo/TodoApp';
import Todo from './todo/Todo';
import AddTodo from './todo/AddTodo';
import TodoList from './todo/TodoList';
import TodoListFooter from './todo/TodoListFooter';
import TodoTextInput from './todo/TodoTextInput';
import ReversePipe from './pipes/ReversePipe';
import StatusPipe from './pipes/StatusPipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoApp,
    Todo,
    AddTodo,
    TodoList,
    TodoListFooter,
    TodoTextInput,
    ReversePipe,
    StatusPipe
  ],
  entryComponents: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ApolloModule.forRoot(provideClient)
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
