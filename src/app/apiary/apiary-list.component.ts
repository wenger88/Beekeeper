/**
 * Created by goran.pavlovski on 12/30/2016.
 */

import {Component, OnInit} from "@angular/core";
import {DataService} from "../core/services/data.service";
import {Apiary} from "../shared/interfaces";
@Component({
    selector: 'bk-apiary',
    template: require('./apiary-list.component.html'),
    styles: [require('./apiary-list.component.scss')]
})

export class ApiaryListComponent implements OnInit{


    title: string;
    apiaries: Apiary[];


    constructor(private dataService: DataService){
        this.title = 'Apiaries';
    }


    ngOnInit(): void {

        this.getAllApiaries()

    }

    getAllApiaries(){
        this.dataService.getAllApiaries()
            .subscribe((apiaries: Apiary[]) => {
                this.apiaries = apiaries;
            })
    }








}