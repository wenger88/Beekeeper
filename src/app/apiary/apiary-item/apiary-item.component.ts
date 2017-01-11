/**
 * Created by goran.pavlovski on 1/9/2017.
 */

import {Component, Input, OnInit} from "@angular/core";
import {DataService} from "../../core/services/data.service";
import {Apiary, Hive} from "../../shared/interfaces";
import {ApiaryService} from "../apiary.service";
@Component({
    selector: 'bk-apiary-item',
    template: require('./apiary-item.component.html'),
    styles: [require('./apiary-item.component.scss')]
})

export class ApiaryItemComponent implements OnInit{

    @Input() apiary: Apiary;
    hives: any[] = [];

    constructor(private apiaryService: ApiaryService){}

    ngOnInit(): void {
        this.apiaryService.getApiaryHives(this.apiary.id)
            .subscribe((hives: Hive[]) => this.hives = hives)
    }



}