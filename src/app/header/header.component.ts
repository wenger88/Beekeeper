/**
 * Created by goran.pavlovski on 12/29/2016.
 */
import {Component} from "@angular/core";
@Component({
    selector: 'bk-header',
    template: require('./header.component.html'),
    styles: [require('./header.component.scss')]
})

export class HeaderComponent{
    isCollapsed: boolean = true;

    constructor() {
    }

    closeNav(){
        this.isCollapsed = true;
    }
}