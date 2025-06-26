import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-input',
  imports: [CommonModule],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.scss',
  standalone: true,
})
export class CustomInput {
  @Input() styles: { [klass: string]: any } = {};
}
