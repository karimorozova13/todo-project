import {
  Component,
  EventEmitter,
  Input,
  Output,
  HostListener,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  @Input() todo: string = '';
  @Input() btnTitle: string = 'Edit';

  @Output() updateTodo = new EventEmitter<string>();
  @Output() closeModal = new EventEmitter<void>();

  value: string = '';

  ngOnInit() {
    this.value = this.todo;
  }

  onUpdate() {
    if (this.value) {
      this.updateTodo.emit(this.value);
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.value) {
      this.onUpdate();
    }
  }

  onClose() {
    this.closeModal.emit();
  }
}
