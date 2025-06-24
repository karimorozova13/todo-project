import { Component, OnInit } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { authApi } from '../../utils/utils/authApi';
import { todoListApi } from '../../utils/utils/todoApi';
import { Header } from '../header/header';
import { Container } from '../container/container';
import { Title } from '../title/title';
import { TodoList } from '../todo-list/todo-list';
import { Modal } from '../modal/modal';
import { Section } from '../section/section';
import { Loader } from '../loader/loader';



@Component({
  selector: 'app-my-todo-list',
  imports: [
    Header,Container,Title,TodoList,Modal,Section,Loader,ReactiveFormsModule,CommonModule
  ],
  templateUrl: './my-todo-list.html',
  styleUrl: './my-todo-list.scss'
})
export class MyTodoList implements OnInit {
  todoList: any[] = [];
  isAddNewTask = false;
  token: string | null = null;
  owner: any = null;
  avatarUrl = '';
  isLoading = false;

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.fetchTodoList();
      this.fetchOwner();
    }
  }

  async fetchTodoList() {
    try {
      this.isLoading = true;
      const data = await todoListApi.getAll(this.token || '');
      this.todoList = data || [];
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  async fetchOwner() {
    try {
      this.isLoading = true;
      const data = await authApi.current(this.token || '');
      this.owner = data;
      this.avatarUrl = data.avatarUrl;
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  async addNewTask(val: string) {
    try {
      this.isLoading = true;
      await todoListApi.addNew(val, this.token || '');
      await this.fetchTodoList();
    } catch (error) {
      console.error(error);
    } finally {
      this.isAddNewTask = false;
      this.isLoading = false;
    }
  }

  async setAvatar(file: File) {
    try {
      this.isLoading = true;
      const formData = new FormData();
      formData.append('avatar', file);
      const newPath = await authApi.upload(this.token || '', formData);
      this.avatarUrl = newPath.url;
      await this.fetchOwner();
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  // Helper for file input change event
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files[0];
    if (file) {
      this.setAvatar(file);
    }
  }
}

