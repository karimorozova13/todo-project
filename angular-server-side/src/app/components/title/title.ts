import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.scss',
})
export class Title {
  @Input() title: string = '';
}
