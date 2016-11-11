import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { ProductModel } from './../product.model';
import { ProductArrayService } from './../product-array-service/product-array.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input() products: Array<ProductModel>;

  // shouldGetData = true, then component should use service to get all products
  // shouldGetData = false, then component should wait data from search
  @Input() shouldGetData: boolean = true;

  constructor(
    private productService: ProductArrayService
  ) { }

  ngOnInit() {
    if (!this.products && this.shouldGetData) {
      this.getProducts();
    }
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
