import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  imports: [CommonModule],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
  standalone: true,
})
export class Icon {
  @Output() onClick = new EventEmitter<void>();
  @Input() type: string = '';

  handleClick() {
    this.onClick.emit();
  }
}
