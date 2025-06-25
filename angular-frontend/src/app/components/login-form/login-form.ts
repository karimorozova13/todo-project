import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { authApi } from '../../utils/utils/authApi';

import { Section } from '../section/section';
import { Container } from '../container/container';
import { FormTitle } from '../form-title/form-title';
import { Icon } from '../icon/icon';
import { CustomInput } from '../custom-input/custom-input';
import { SubmitBtn } from '../submit-btn/submit-btn';
import { LinkText } from '../link-text/link-text';
import { PopUp } from '../pop-up/pop-up';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Section,
    Container,
    FormTitle,
    Icon,
    CustomInput,
    SubmitBtn,
    LinkText,
    RouterModule,
    PopUp,
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm {
  error: string | null = null;
  type: 'password' | 'text' = 'password';
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  toggleType(): void {
    this.type = this.type === 'password' ? 'text' : 'password';
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;

    try {
      const res = await authApi.login(this.form.value);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/my-todo-list']);
    } catch (err) {
      this.error = 'Email or password is incorrect';
    }
  }
}
