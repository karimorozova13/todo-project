import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submit-btn',
  imports: [],
  templateUrl: './submit-btn.html',
  styleUrl: './submit-btn.scss',
  standalone: true,
})
export class SubmitBtn {
  @Input() title: string = '';
  @Input() type: 'submit' | 'button' = 'button';
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}
