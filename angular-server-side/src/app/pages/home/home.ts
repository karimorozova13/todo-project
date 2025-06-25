import { Component } from '@angular/core';
import { RegisterForm } from '../../components/register-form/register-form';

@Component({
  selector: 'app-home',
  imports: [RegisterForm],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
