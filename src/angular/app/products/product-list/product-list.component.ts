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
  categories: Array<String>;

  constructor(
    private productService: ProductArrayService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
        .then(products => {
          this.products = products;
          this.fillCategories();
        });
  }


  fillCategories() {
    let categoryObj = {};

    this.products.forEach(item => categoryObj[item.category] = 1);
    this.categories = Object.keys(categoryObj);
  }

  ngOnDestroy() {
  }
}
