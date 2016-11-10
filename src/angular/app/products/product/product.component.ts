import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../product.model';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  canEdit: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    // TODO: canEdit - temporey mock disable of Edit button
    this.canEdit = false;
  }

  editProduct(product: Product) {
    let link = ['/products/edit', product._id];
    this.router.navigate(link);
  }
}
