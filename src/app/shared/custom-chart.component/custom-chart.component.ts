/**
 * Created by Goran on 2/5/2017.
 */

import {Component, Input, ElementRef, ViewChild, Renderer, AfterViewInit} from "@angular/core";

declare var Chart:any;

@Component({
    selector: 'custom-chart',
    template: require('./custom-chart.component.html')
})

export class CustomChartComponent implements AfterViewInit{

    @ViewChild('canvas') private _canvas:ElementRef;
    @Input() height:number;
    @Input() width:number;
    @Input() values:number[];
    @Input() labels:string[];
    @Input() colors:string[];
    @Input() title:string;
    @Input() type: string;
    @Input() label: string;

    constructor(){
    }

    ngAfterViewInit() {
        let data:any = {
            labels: this.labels,
            datasets: [{
                label: this.label,
                data: this.values,
                backgroundColor: this.colors,
            }]
        };
        let options:any = {
            // this avoids 0x0 charts
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };
        if (this.title) {
            options.title = {
                display: true,
                text: this.title,
            }
        }
        let chart = new Chart(this._canvas.nativeElement, {
            type: this.type,
            data: data,
            options: options,
        });

    }





}
