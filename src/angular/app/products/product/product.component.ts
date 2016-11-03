import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from './../../models/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  calculateCalories(product: Product) {
    console.log('calculateCalories method for ' + product);
  }
}
