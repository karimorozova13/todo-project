import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { todoListApi } from '../../utils/utils/todoApi';

import { Modal } from '../modal/modal';

interface TodoItemData {
  _id: string;
  title: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-todo-item',
  imports: [Modal, CommonModule, RouterModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
  standalone: true,
})
export class TodoItem implements OnInit {
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
      await todoListApi.updateOne(this.el._id, val, isCompleted, this.token);
      if (this.refreshData) await this.refreshData();
    } catch (error) {
      console.error(error);
    } finally {
      this.isEdit = false;
    }
  }

  async deleteTodo() {
    try {
      await todoListApi.deleteOne(this.el._id, this.token);
      if (this.refreshData) await this.refreshData();
    } catch (error) {
      console.error(error);
    }
  }

  async toggleComplete() {
    this.isCompleted = !this.isCompleted;
    await this.saveTodo(this.todo, this.isCompleted);
  }

  navigateToDetails() {
    this.router.navigate([`/my-todo-list/${this.el._id}`]);
  }

  openEditModal() {
    this.isEdit = true;
  }

  closeModal() {
    this.isEdit = false;
  }
}
