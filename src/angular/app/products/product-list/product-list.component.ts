import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProductModel } from './../product.model';
import { ProductArrayService } from './../product-array-service/product-array.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Array<ProductModel>;
  isAdmin: boolean;

  constructor(
    private productService: ProductArrayService
  ) { }

  ngOnInit() {
    if (!this.products) {
      this.getProducts();
    }
    this.isAdmin = false;
  }

  getProducts(): void {
    this.productService.getProducts()
      .then(products => {
        this.products = products;
      });
  }

  ngOnDestroy() {
  }
}
