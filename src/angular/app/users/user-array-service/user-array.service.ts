import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { UserModel } from '../user.model';
import { AuthService } from './../../services/auth.service';

@Injectable()
export class UserArrayService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private userLocalUrls = {
    getAll: '/user/getAll',
    add: '/user/register',
    update: '/user/update/'
  };
  originUrl: String = '';

  constructor(
      private http: Http,
      private authService: AuthService
  ) {
    let url = new URL(document.URL);
    this.originUrl = url.origin;
  }

  getUsers(): Promise<UserModel[]> {
    return this.http
        .get(`${this.originUrl}${this.userLocalUrls.getAll}`)
        .toPromise()
        .then(response => {
          return response.json() as UserModel[]
        })
        .catch(this.handleError);
  }

  getUser(id: number): Promise<UserModel> {
    return this.getUsers()
      .then(users => users.find(user => user._id === id));
  }

  addUser(user: UserModel): Promise<boolean> {
    return this.authService.registerUser(user)
      .then((result) => result)
      .catch(this.handleError);
  }

  updateUser(user: UserModel): Promise<UserModel> {
    return this.http
        .put(`${this.originUrl}${this.userLocalUrls.update}${user._id}`, JSON.stringify(user), {headers: this.headers})
        .toPromise()
        .then(() => user)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
