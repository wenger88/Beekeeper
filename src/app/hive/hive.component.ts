/**
 * Created by goran.pavlovski on 12/30/2016.
 */

import {Component} from "@angular/core";
@Component({
    selector: 'bk-hive',
    template: require('./hive.component.html'),
    styles: [require('./hive.component.scss')]
})

export class HiveComponent{

    title: string;

    constructor(){
        this.title = 'Hives'
    }



}