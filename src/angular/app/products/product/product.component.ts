import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductModel } from '../product.model';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: ProductModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}
}
