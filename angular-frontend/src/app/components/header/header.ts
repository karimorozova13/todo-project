import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
constructor(private router: Router) {}

  logout() {
    const token = localStorage.getItem('token');

    if (token) {
      // Replace this with a real service call if needed
      console.log('Logging out with token:', token);
    } else {
      console.warn('No token found, skipping logout.');
    }

    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

