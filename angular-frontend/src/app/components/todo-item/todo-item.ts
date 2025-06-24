import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Modal } from '../modal/modal'

interface TodoItemData {
  _id: string;
  title: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-todo-item',
  imports: [Modal],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss'
})
export class TodoItem {
@Input() el!: TodoItemData;
  @Input() token!: string;
  @Input() refreshData?: () => Promise<void>;

  isCompleted = false;
  todo = '';
  isEdit = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.todo = this.el.title;
    this.isCompleted = this.el.isCompleted;
  }

  async saveTodo(val: string, isCompleted: boolean) {
    this.todo = val;
    try {
      // Replace with actual service call
      console.log('Saving todo:', this.el._id, val, isCompleted, this.token);
    } catch (error) {
      console.error(error);
    } finally {
      this.isEdit = false;
    }
  }

  async deleteTodo() {
    try {
      // Replace with actual service call
      console.log('Deleting:', this.el._id);
      if (this.refreshData) await this.refreshData();
    } catch (error) {
      console.error(error);
    }
  }

  openEditModal() {
    this.isEdit = true;
  }

  closeModal() {
    this.isEdit = false;
  }
}

