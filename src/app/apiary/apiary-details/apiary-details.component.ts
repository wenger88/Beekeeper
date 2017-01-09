/**
 * Created by goran.pavlovski on 1/9/2017.
 */

import {Component, OnInit} from "@angular/core";
import {DataService} from "../../core/services/data.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {Apiary, Hive} from "../../shared/interfaces";
import {Response} from "@angular/http";
@Component({
    selector: 'bk-apiary-details',
    template: require('./apiary-details.component.html'),
    styles: [require('./apiary-details.component.scss')]
})

export class ApiaryDetailsComponent implements OnInit{


    apiary: Apiary;
    hives: any[] = [];

    constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router){}

    ngOnInit(): void {

        this.route.params.subscribe((params: Params)=>{
            this.dataService.getSingleApiary(params['id'])
                .subscribe((apiary: Apiary) => {
                    this.apiary = apiary;
                    this.dataService.getApiaryHives(this.apiary.id)
                        .subscribe((hives: Hive[]) => this.hives = hives)
                })

        })

    }


}