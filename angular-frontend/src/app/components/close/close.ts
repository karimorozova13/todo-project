import { Component,Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-close',
  imports: [MatIconModule],
  templateUrl: './close.html',
  styleUrl: './close.scss',
})
export class Close {
 @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}
