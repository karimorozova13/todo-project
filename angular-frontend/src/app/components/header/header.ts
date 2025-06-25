import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { authApi } from '../../utils/utils/authApi';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})

export class Header {
constructor(private router: Router) {}

  async logout() {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        authApi.logout(token);
      } catch (error) {
        console.error('Logout API error:', error);
      }
    } else {
      console.warn('No token found, skipping API logout');
    }

    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

