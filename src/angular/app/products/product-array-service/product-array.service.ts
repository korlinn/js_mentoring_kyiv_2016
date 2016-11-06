import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Product }       from './../../models/product';


@Injectable()
export class ProductArrayService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private productLocalUrls = {
    getAll: '/product/getAll',
    add:    '/product/add',
    update: '/product/update/'
  };
  originUrl: String = '';

  constructor(private http: Http) {
    let url = new URL(document.URL);
    this.originUrl = url.origin;
  }

  getProducts(): Promise<Product[]>{
    return this.http
        .get(this.originUrl + this.productLocalUrls.getAll)
        .toPromise()
        .then(response => response.json() as Product[])
        .catch(this.handleError);
  }

  getProduct(id: number): Promise<Product>{
    return this.getProducts()
        .then(response => response.find(product => product._id === id));
  }

  addProduct(product: Product): Promise<Product> {
    return this.http
      .post(this.originUrl + this.productLocalUrls.add, JSON.stringify(product), {headers: this.headers})
      .toPromise()
      .then(() => product)
      .catch(this.handleError);
  }

  updateProduct(product: Product): Promise<Product> {
    return this.http
      .put(this.originUrl + this.productLocalUrls.update + product._id, JSON.stringify(product), {headers: this.headers})
      .toPromise()
      .then(() => product)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
