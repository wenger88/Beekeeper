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

    constructor(){
        this.title = 'Dashboard';
    }

}