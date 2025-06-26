import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-title',
  imports: [],
  templateUrl: './form-title.html',
  styleUrl: './form-title.scss',
  standalone: true,
})
export class FormTitle {
  @Input() title: string = '';
}
