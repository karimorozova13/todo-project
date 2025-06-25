import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItem } from '../todo-item/todo-item';

interface TodoItemSchema {
  title: string;
  isCompleted: boolean;
  _id: string;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItem, CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  @Input() todoList: TodoItemSchema[] = [];
  @Input() token: string = '';
  @Input() refreshData?: () => Promise<void>;
}
