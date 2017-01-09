/**
 * Created by goran.pavlovski on 1/9/2017.
 */

import {Component, Input, OnInit} from "@angular/core";
import {DataService} from "../../core/services/data.service";
import {Apiary, Hive} from "../../shared/interfaces";
@Component({
    selector: 'bk-apiary-item',
    template: require('./apiary-item.component.html'),
    styles: [require('./apiary-item.component.scss')]
})

export class ApiaryItemComponent implements OnInit{

    @Input() apiary: Apiary;
    hives: any[] = [];

    constructor(private dataService: DataService){}

    ngOnInit(): void {
        this.dataService.getApiaryHives(this.apiary.id)
            .subscribe((hives: Hive[]) => this.hives = hives)
    }



}