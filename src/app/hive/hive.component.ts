/**
 * Created by goran.pavlovski on 12/30/2016.
 */

import {Component, OnInit} from "@angular/core";
import {DataService} from "../core/services/data.service";
import {Hive} from "../shared/interfaces";
@Component({
    selector: 'bk-hive',
    template: require('./hive.component.html'),
    styles: [require('./hive.component.scss')]
})

export class HiveComponent implements OnInit{

    hives: Hive[];

    constructor(private dataService: DataService){

    }

    ngOnInit(): void {

        this.getAllHives()

    }


    getAllHives(){
        this.dataService.getAllHives()
            .subscribe((hives: Hive[]) => {
                this.hives = hives
            })
    }

}