import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Product } from './../../models/product';
import { ProductArrayService } from './../product-array-service/product-array.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Array<Product>;
  private selectedProductId: number;
  private sub: Subscription;

  constructor(
    // private productService: ProductArrayService,
    // private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.usersService.getProducts()
    //       .then(users => this.users = users);
    //
    // // listen id from UserFormComponent
    // this.sub = this.route.params
    //   .subscribe(params => {
    //     let id = +params['id'];
    //     if (id) {
    //       this.selectedProductId = +params['id'];
    //       console.log(`Last time you edit user with id ${this.selectedProductId}`);
    //     }
    //   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
