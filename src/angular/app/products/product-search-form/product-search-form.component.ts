import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductModel }             from './../product.model';
import { ProductArrayService } from './../product-array-service/product-array.service';

type ResultProduct = {
  name: string;
  quantity: number;
  measure: string;
}

@Component({
  selector: 'product-search-form',
  templateUrl: './product-search-form.component.html',
  styleUrls: ['./product-search-form.component.css']
})
export class ProductSearchFormComponent implements OnInit {
  products: Array<ProductModel>;
  categories: Array<String>;
  query: Object = {
    name: String,
    category: String
  };
  wantedCalories: number;
  searchResult: Array<ResultProduct>;

  constructor(private productService: ProductArrayService,
              private route: ActivatedRoute,
              private router: Router) {
    this.query = {name: '', category: ''};
  }

  ngOnInit() {
    this.fillCategories();
  }

  fillCategories() {
    this.productService.getCategories()
      .then(result => this.categories = result);
  }

  findProducts() {
    let query = {};

    for (let key in this.query) {
      if (this.query.hasOwnProperty(key) && this.query[key]) {
        query[key] = this.query[key];
      }
    }
    this.searchResult = [];

    this.productService.findProductsByQuery(query)
        .then(result => {
          this.calculateQuantity(result)
        });
  }

  calculateQuantity(products: Array<ProductModel>) {
    products.forEach(item => {
      let quantity = item.isCounatble
          ? Math.round((this.wantedCalories * 100) / (item.weightOne * item.calories))
          : (this.wantedCalories / item.calories) * 100;

      quantity = quantity > 5 ? Math.round(quantity) : Math.round(quantity * 10) / 10;

      let result = {
        name: item.name,
        quantity: quantity,
        measure: item.isCounatble ? 'items' : 'grams'
      };

      this.searchResult.push(result)
    });
  }

  goBack() {
    this.router.navigate(['./../'], { relativeTo: this.route});
  }
}
