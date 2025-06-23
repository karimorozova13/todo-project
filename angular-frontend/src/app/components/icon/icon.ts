import { Component, EventEmitter, Output, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-icon',
  imports: [MatIconModule, CommonModule],
  templateUrl: './icon.html',
  styleUrl: './icon.scss'
})
export class Icon {
@Output() onClick = new EventEmitter<void>();
@Input() type: string = '';

  handleClick() {
    this.onClick.emit();
  }
}
