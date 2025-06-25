import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Close } from '../close/close';

@Component({
  selector: 'app-pop-up',
  imports: [Close, CommonModule],
  templateUrl: './pop-up.html',
  styleUrl: './pop-up.scss',
})
export class PopUp {
  @Input() error: string = '';
  isShow: boolean = true;

  ngOnChanges() {
    this.isShow = !!this.error;
  }

  hide() {
    this.isShow = false;
  }
}
