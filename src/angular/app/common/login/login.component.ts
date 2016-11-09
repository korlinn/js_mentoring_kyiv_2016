import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  private loginData:Object = {
    email: '',
    password: ''
  };
  private userLoggedIn: boolean;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.userLoggedIn = this.authService.checkLogin();
  }

  login() {
    this.authService.login(this.loginData)
        .then((response) => {
          this.userLoggedIn = response;
        })
  }

  isLoggedIn() {
    return this.userLoggedIn;
  }

  logout() {
    this.authService.logout()
        .then(() => this.userLoggedIn = false);
  }

}
