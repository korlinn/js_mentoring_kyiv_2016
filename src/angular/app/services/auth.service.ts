import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Cookie }        from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/operator/toPromise';

import { UserModel } from './../users';

const AUTH_COOKIE = {
  NAME: 'loggedUser',
  EXPIRE_FROM_NOW: 10
};

@Injectable()
export class AuthService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private LocalUrls = {
    login: '/user/authenticate',
    logout: '/user/logout',
    register: '/user/register'
  };
  originUrl: String = '';

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: Http) {
    let url = new URL(document.URL);
    this.originUrl = url.origin;
  }

  getCookieExpireTime() {
    let expirationDate = new Date();
    expirationDate.setMinutes(expirationDate.getMinutes() + AUTH_COOKIE.EXPIRE_FROM_NOW);
    return expirationDate;
  }

  login(loginData): Promise<boolean> {
    return this.http
      .post(`${this.originUrl}${this.LocalUrls.login}`, JSON.stringify(loginData), {headers: this.headers})
      .toPromise()
      .then((response: any) => {
        Cookie.set(AUTH_COOKIE.NAME, JSON.parse(response._body).user, 10);
        return response.status === 200 ? true : false
      })
      .catch(this.handleError);
  }

  logout(): Promise<void> {
    return this.http
      .get(`${this.originUrl}${this.LocalUrls.logout}`)
      .toPromise()
      .then(() => {
        Cookie.delete(AUTH_COOKIE.NAME);
      })
      .catch(this.handleError);
  }

  registerUser(user: UserModel): Promise<boolean> {
    return this.http
      .post(`${this.originUrl}${this.LocalUrls.register}`, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then((response: any) => {
        if (response.status === 200) {
          Cookie.set(AUTH_COOKIE.NAME, JSON.parse(response._body).user, 10);
          return true;
        } else {
          return false;
        }
      })
      .catch(this.handleError);
  }

  checkLogin() {
    return Cookie.get(AUTH_COOKIE.NAME) ? true : false;
  }

  getUserToken(): string | boolean{
    return Cookie.get(AUTH_COOKIE.NAME) || false;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}