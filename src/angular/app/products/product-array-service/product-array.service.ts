import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Product } from './../../models/product';


@Injectable()
export class ProductArrayService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private productUrls = {
    getAll: ''
  };

  constructor(private http: Http) {
    let url = new URL(document.URL);

    this.productUrls.getAll = url.origin + '/product/getAll'

  }

  getProducts(): Promise<Product[]>{
    return this.http
        .get(this.productUrls.getAll)
        .toPromise()
        .then(response => response.json() as Product[])
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
