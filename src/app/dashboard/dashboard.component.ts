/**
 * Created by goran.pavlovski on 12/30/2016.
 */
import {Component} from "@angular/core";
@Component({
    selector: 'bk-dashboard',
    template: require('./dashboard.component.html'),
    styles: [require('./dashboard.component.scss')]
})

export class DashboardComponent{

    title: string;
    values : any = [10,20,30,40,50];
    labels: any = ['a','b','c','d','e',];
    chartColors: any = ['#1abc9c', '#3498db', '#9b59b6', '#34495e', '#e67e22'];

    constructor(){
        this.title = 'Dashboard';
    }

}