/**
 * Created by goran.pavlovski on 12/30/2016.
 */

import {Component} from "@angular/core";
@Component({
    selector: 'bk-apiary',
    template: require('./apiary.component.html'),
    styles: [require('./apiary.component.scss')]
})

export class ApiaryComponent{

    title: string;

    constructor(){
        this.title = 'Apiaries';
    }

}