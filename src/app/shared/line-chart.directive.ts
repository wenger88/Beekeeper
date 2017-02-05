/**
 * Created by Goran on 2/5/2017.
 */

import {Directive, ElementRef} from "@angular/core";

declare var Chart: any;

@Directive({
    selector: '[linechart]'
})

export class LineChartDirective {
    el: any;
    myChart: any;

    constructor(element: ElementRef) {
        this.el = element.nativeElement;
    }

    ngAfterViewInit() {

        var canvas = this.el;
        var ctx = canvas.getContext('2d');

        var _data = {
            labels: [
                'A',
                'B',
                'C',
                'D',
                'E'
            ],
            datasets: [{
                data: [80, 40, 50, 90, 10],
                label: 'female',
                borderColor: "rgba(197,23,1,0.8)",
                backgroundColor: "rgba(197,23,1,0.4)",
                hoverBackgroundColor: "rgba(197,23,1,1)",
                borderWidth: 1,
                pointBorderColor: "rgba(197,23,1,1)",
                pointBackgroundColor: "rgba(255,255,255,0.8)",
                pointBorderWidth: 1.5,
            }]
        };

        var _options = {
            scales: {
                xAxes: [{
                    categorySpacing: 0,
                }],
                yAxes: [{
                    type: "linear",
                    display: true,
                    position: "left",
                    id: "y-axis-1",
                }]
            }
        };

        this.myChart = new Chart(ctx, {
            type: 'line',
            data: _data,
            options: _options
        });

        console.log(ctx);
        console.log(this.myChart);

    }

}