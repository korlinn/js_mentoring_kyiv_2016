import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './../../models/user';

@Injectable()
export class UserArrayService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private userUrls = {
    getAll: ''
  };

  constructor(private http: Http) {
    let url = new URL(document.URL);

    this.userUrls.getAll = url.origin + '/user/getAll';
  }

  getUsers() {
    return this.http
        .get(this.userUrls.getAll)
        .toPromise()
        .then(response => {
          console.log(response);
          return response.json() as User[];
        })
        .catch(this.handleError);
  }

  getUser(id: number) {
    return this.getUsers()
      .then(users => users.find(user => user._id === id));
  }

  addUser(user: User) {
    return this.http
        .post(this.userUrls.getAll + '/register', user)
  }

  updateUser(user: User) {
    return this.http
        .put(this.userUrls.getAll + '/update/' + user._id, user);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
