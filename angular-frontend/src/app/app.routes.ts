import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterForm } from './components/register-form/register-form';
import { LoginForm } from './components/login-form/login-form';
import { MyTodoList } from './components/my-todo-list/my-todo-list';
import { TodoItem } from './components/todo-item/todo-item';

export const routes: Routes = [
  { path: '', component: RegisterForm },
  { path: 'login', component: LoginForm },
  { path: 'my-todo-list', component: MyTodoList },
  // { path: 'my-todo-list/:id', component: TodoItem },
];

