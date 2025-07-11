import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { todoListApi } from '../../utils/utils/todoApi';
import { Header } from '../../components/header/header';
import { Section } from '../../components/section/section';
import { Container } from '../../components/container/container';
import { Loader } from '../../components/loader/loader';
import { Title } from '../../components/title/title';

@Component({
  selector: 'app-todo-details',
  imports: [
    CommonModule,
    RouterModule,
    Header,
    Section,
    Container,
    Title,
    Loader,
  ],
  templateUrl: './todo-details.html',
  styleUrl: './todo-details.scss',
  standalone: true,
})
export class TodoDetails implements OnInit {
  id = '';
  token = '';
  todo: any = null;
  isLoading = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token') || '';
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id && this.token) {
      this.getTodo();
    }
  }

  async getTodo() {
    try {
      this.isLoading = true;
      const res = await todoListApi.getByid(this.id, this.token);
      this.todo = res.data.todo;
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  goBack() {
    this.router.navigate(['/my-todo-list']);
  }
}
