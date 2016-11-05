import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from './../../models/product';
import { ProductArrayService } from './../product-array-service/product-array.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Array<Product>;

  constructor(
    private productService: ProductArrayService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
        .then(products => {
          console.log(products);
          this.products = products
        });
  }

  ngOnDestroy() {
  }
}
