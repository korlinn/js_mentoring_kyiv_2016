import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Product } from './../../models/product';

let productList = [
  new Product(1, 'milk', 35),
  new Product(2, 'chiken', 123),
  new Product(3, 'nut', 680)
];

let productListPromise = Promise.resolve(productList);

@Injectable()
export class ProductArrayService {
  getProducts() {
    return productListPromise;
  }

  getProduct(id: number) {
    return this.getProducts()
      .then(products => products.find(product => product.id === id));
  }

  addProduct(product: Product) {
    productList.push(product);
  }

  updateProduct(product: Product) {
    let i = -1;

    productList.forEach((item, index) => {
      if (item.id === product.id ) {
        i = index;
        return false;
      }
    });

    if (i > -1) {
      productList.splice(i, 1, product);
    }
  }
}
