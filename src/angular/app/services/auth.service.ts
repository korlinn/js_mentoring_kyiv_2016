import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Cookie } from 'angular2-cookie/core';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private LocalUrls = {
    login: '/user/authenticate',
    logout: '/user/logout'
  };
  originUrl: String = '';

  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: Http) {
    let url = new URL(document.URL);
    this.originUrl = url.origin;
  }

  login(loginData): Promise<boolean> {
    return this.http
      .post(this.originUrl + this.LocalUrls.login, JSON.stringify(loginData), {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(200);
        return response.status === 200 ? true : false
      })
      .catch(this.handleError);
  }

  logout(): Promise<boolean> {
    return this.http
        .get(this.originUrl + this.LocalUrls.logout)
        .toPromise()
        .then((response) => this.isLoggedIn = response.status === 200? false : true)
        .catch(this.handleError);
  }

  checkLogin() {
    return this.isLoggedIn;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}