/**
 * Created by goran.pavlovski on 1/9/2017.
 */

import {Component, Input} from "@angular/core";
import {Hive} from "../../shared/interfaces";
@Component({
    selector: 'bk-hive-item',
    template: require('./hive-item.component.html'),
    styles: [require('./hive-item.component.scss')]
})

export class HiveItemComponent{

    @Input() hive: Hive;

    constructor(){}


}