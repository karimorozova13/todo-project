import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { MyTodoList } from './pages/my-todo-list/my-todo-list';
import { TodoDetails } from './pages/todo-details/todo-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'my-todo-list', component: MyTodoList },
  { path: 'my-todo-list/:id', component: TodoDetails },
];
