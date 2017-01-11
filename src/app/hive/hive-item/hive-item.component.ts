/**
 * Created by goran.pavlovski on 1/9/2017.
 */

import {Component, Input, OnInit} from "@angular/core";

import {Hive, Apiary} from "../../shared/interfaces";
import {DataService} from "../../core/services/data.service";
import * as _ from 'lodash';
import {ApiaryService} from "../../apiary/apiary.service";


@Component({
    selector: 'bk-hive-item',
    template: require('./hive-item.component.html'),
    styles: [require('./hive-item.component.scss')]
})

export class HiveItemComponent implements OnInit{

    @Input() hive: Hive;
    apiaries: any[] = [];
    _ = require('lodash');
    apiaryName: string;


    constructor(private apiaryService: ApiaryService){}

    ngOnInit(): void {
        this.apiaryService.getAllApiaries()
            .subscribe((apiaries: Apiary[]) => {
                this.apiaries = apiaries;
                if (typeof this.hive.apiaryId === 'string'){
                    this.hive.apiaryId = parseInt(this.hive.apiaryId);
                }
                let name = _.filter(this.apiaries, ['id', this.hive.apiaryId]);
                this.apiaryName = name[0].name;
                console.log('apiaryName: ', this.apiaryName);
            })
    }

}