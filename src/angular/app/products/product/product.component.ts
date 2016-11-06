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

  editProduct(product: Product) {
    let link = ['/products/edit', product._id];
    this.router.navigate(link);
  }
}
