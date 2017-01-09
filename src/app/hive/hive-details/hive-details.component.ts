/**
 * Created by goran.pavlovski on 1/9/2017.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

import {DataService} from "../../core/services/data.service";
import {Hive, Apiary} from "../../shared/interfaces";
import * as _ from 'lodash';



@Component({
    selector: 'bk-hive-details',
    template: require('./hive-details.component.html'),
    styles: [require('./hive-details.component.scss')]
})

export class HiveDetailsComponent implements OnInit{

    hive: Hive;
    apiaries: any[] = [];
    _ = require('lodash');
    apiaryName: string;

    constructor(private dataService: DataService, private route: ActivatedRoute){}


    ngOnInit(): void {

        this.route.params.subscribe((params: Params)=>{

            this.dataService.getSingleHive(params['id'])
                .subscribe((hive: Hive)=> {
                    this.hive = hive
                })

            this.dataService.getAllApiaries()
                .subscribe((apiaries: Apiary[]) => {
                    this.apiaries = apiaries;
                    let name = _.filter(this.apiaries, ['id', this.hive.apiaryId]);
                    this.apiaryName = name[0].name;
                    console.log('apiaryName: ', this.apiaryName);
                })

        })


    }

}