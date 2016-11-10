import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { ProductModel } from './../../products';
import { ProductArrayService } from './../../products';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, OnDestroy {
  product: ProductModel;
  oldProduct: ProductModel;
  private sub: Subscription;

  constructor(private productService: ProductArrayService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    this.product = new ProductModel(null, '', '', null, null, null, null, null, null);

    this.sub = this.route.params.subscribe(params => {
      let id = params["id"];

      if (id) {
        this.productService.getProduct(id)
            .then(product => {
              this.product = Object.assign({}, product);
              this.oldProduct = product;
            });
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  saveProduct() {
    let product = new ProductModel(
        this.product._id,
        this.product.name,
        this.product.category,
        this.product.calories,
        this.product.isCounatble,
        this.product.weightOne,
        this.product.protein,
        this.product.fats,
        this.product.carbohydrate
    );

    if (product._id) {
      this.productService.updateProduct(product);
      this.oldProduct = this.product;
      this.router.navigate(['/products']);
    }
    else {
      this.productService.addProduct(product)
          .then(()=>{
            this.oldProduct = this.product;
            this.router.navigate(['/products']);
          });
    }
  }

  goBack() {
    this.router.navigate(['./../'], { relativeTo: this.route});
  }
}
