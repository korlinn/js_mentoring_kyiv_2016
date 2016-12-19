import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import * as d3 from 'd3';
import { scaleLinear, scaleOrdinal, schemeCategory20 } from 'd3-scale';
import { hierarchy, pack } from 'd3-hierarchy';

import { ProductModel } from './../product.model';

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
    },
    BAR_CHART: {
        COLOR: 'steelblue',
        HEIGHT: 30
    }
};

const COLOR_SCHEMA = {
    RED: {
        NAME: 'RED',
        DARK: '#cc5555',
        LIGHT: '#cc9999'
    },
    GREEN: {
        NAME: 'GREEN',
        DARK: '#55cc77',
        LIGHT: '#77cc99'
    },
    GRAYBLUE: {
        NAME: 'GRAYBLUE',
        DARK: '#aabbcc',
        LIGHT: '#ccddee'
    },
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
    public currentColorSchema: string = COLOR_SCHEMA.GRAYBLUE.NAME;
    public multiColorFunction: any;
    public isMulticolor: boolean = true;

    constructor() {
        this.multiColorFunction = scaleOrdinal(schemeCategory20);
    }

    ngOnInit() {
        this.showChart();
    }

    changeColorSchema() {
        this.showChart();
    }

    toggleMulticolor() {
        this.isMulticolor = !this.isMulticolor;
        this.showChart();
    }

    toggleChartShown() {
        this.isShown = !this.isShown;
        this.showChart();
    }

    showChart() {
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
                this.bubbleChart();
                break;
        }
    }

    barChart() {
        let chart = d3.select('#chart');
        chart.html('');

        let barWidth = parseInt(getComputedStyle(document.getElementById('product-chart-container')).width);
        let dataTransform =scaleLinear()
            .domain([0, d3.max(this.products.map((item) => item[this.chartSource]))])
            .range([0, barWidth]);

        chart.attr('width', '100%')
            .attr('height', CONST.BAR_CHART.HEIGHT * this.products.length);

        let bar = chart.selectAll('g')
            .data(this.products)
            .enter()
            .append('g')
            .style('height', (d) => CONST.BAR_CHART.HEIGHT)
            .style('width', (d) => dataTransform(d[this.chartSource]) + 'px')
            .attr('transform', (d, i) => `translate(0,${i * CONST.BAR_CHART.HEIGHT + 1})`)

        bar.append('rect')
            .attr('height', (d) => `${CONST.BAR_CHART.HEIGHT}px`)
            .attr('width', (d) => dataTransform(d[this.chartSource]) + 'px')
            .style('fill', (d, i) => {
                if (this.isMulticolor) {
                    return this.multiColorFunction(i.toString());
                } else {
                    return (i % 2)
                        ? COLOR_SCHEMA[this.currentColorSchema].DARK
                        : COLOR_SCHEMA[this.currentColorSchema].LIGHT
                }
            });

        bar.append('text')
            .attr('x', 5)
            .attr('y', CONST.BAR_CHART.HEIGHT / 2)
            .attr('dy', '.35em')
            .text((d) => `${d.name}: ${d[this.chartSource]}`);

    }

    bubbleChart() {
        let diameter = parseInt(getComputedStyle(document.getElementById('product-chart-container')).width);
        let chart = d3.select('#chart');

        chart.html('')
            .attr('height', diameter)
            .attr('width', diameter)
            .attr('class', 'bubble');

        let root = hierarchy({children: this.products})
            .sum((d) => d[this.chartSource]);

        let packFunction = pack()
            .size([diameter, diameter])
            .padding(1.5);

        let node = chart.selectAll('.node')
            .data(packFunction(root).leaves())
            .enter()
            .append('g')
            .attr('class', 'node')
            .attr('transform', (d) => `translate(${d.x},${d.y})`);

        node.append('circle')
            .attr('r', (d) => d.r)
            .style('fill', (d, i) => {
                if (this.isMulticolor) {
                    return this.multiColorFunction(i.toString());
                } else {
                    return (i % 2)
                        ? COLOR_SCHEMA[this.currentColorSchema].DARK
                        : COLOR_SCHEMA[this.currentColorSchema].LIGHT
                }
            });

        node.append('text')
            .attr('dy', '.3em')
            .style('text-anchor', 'middle')
            .text((d) => `${d.data['name']}: ${d.value}`);
    }

    ngOnDestroy() {
    }
}
