import { Component, Input, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/auth/auth-guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authGuard: AuthGuard) {}

  logout() {
    localStorage.clear();
  }

  isUserAuthenticated(): boolean {
    if (localStorage.getItem('token') == null || localStorage.getItem('token') == '') {
      return false;
    } else {
      return true;
    }
  }

  ngOnInit() {}
}
