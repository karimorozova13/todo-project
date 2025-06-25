import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-close',
  imports: [],
  templateUrl: './close.html',
  styleUrl: './close.scss',
})
export class Close {
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}
