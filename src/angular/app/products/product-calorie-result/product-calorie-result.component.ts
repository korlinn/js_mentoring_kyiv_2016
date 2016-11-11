import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

type ResultProduct = {
  name: string;
  quantity: number;
  measure: string;
}

@Component({
  selector: 'product-calorie-result',
  templateUrl: './product-calorie-result.component.html',
  styleUrls: ['./product-calorie-result.component.css']
})
export class ProductCalorieResultComponent implements OnInit {
  @Input() wantedCalories: number;
  @Input() searchResult: Array<ResultProduct>;

  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {}

  goBack() {
    this.router.navigate(['./../'], { relativeTo: this.route});
  }
}
