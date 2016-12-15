import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import * as d3 from 'd3';
import { scaleLinear } from "d3-scale";

import { ProductModel } from './../product.model';
import { ProductArrayService } from './../product-array-service/product-array.service';

const CONST = {
    CHART_TYPE: {
        BAR: 'bar',
        BUBBLE: 'bubble'
    },
    CHART_SOURCE: {
        CALORIES: 'calories',
        PROTEINS: 'protein',
        FATS: 'fats',
        CARBOHYDRATES: 'carbohydrate'
    }
};

@Component({
    selector: 'product-chart',
    templateUrl: './product-chart.component.html',
    styleUrls: ['./product-chart.component.css']
})
export class ProductChartComponent implements OnInit, OnDestroy {
    @Input() products: Array<ProductModel>;
    public chartType: string = CONST.CHART_TYPE.BAR;
    public chartSource: string = CONST.CHART_SOURCE.CALORIES;
    public chartWidth: number = 800;
    public chartHeight: number = 400;
    public isShown: boolean = false;

    constructor(
        private productService: ProductArrayService
    ) { }

    ngOnInit() {
        // this.getProducts()
        //     .then(() => {
        //         this.buildChart();
        //     });
        //this.buildChart();
    }

    getProducts(): Promise<void> {
        return this.productService.getProducts()
            .then(products => {
                this.products = products;
            });
    }

    showChart() {
        this.isShown = !this.isShown;

        if (this.isShown) {
            this.buildChart();
        }
    }

    prepareDataForChart() {

    }

    buildChart() {
        switch (this.chartType) {
            case CONST.CHART_TYPE.BAR:
                this.barChart();
                break;
            case CONST.CHART_TYPE.BUBBLE:
                this.bubleChart();
                break;
        }
    }

    barChart() {
        d3.select('#bar-chart').html('');
        d3.select('#bar-bubbles').html('');

        let data = this.products.map((item) => item[this.chartSource]);
        let names = this.products.map((item) => item.name);

        let x =scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, this.chartWidth]);

        d3.select('#bar-chart')
            .selectAll('div')
            .data(this.products)
            .enter().append('div')
            .style('width', (d) => x(d[this.chartSource]) + 'px')
            .style('background-color', 'steelblue')
            .text((d) => d.name);

    }

    bubleChart() {
        d3.select('#bar-chart').html('');
        d3.select('#bar-bubbles').html('');

        // <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="white" />
    }

    ngOnDestroy() {
    }
}
