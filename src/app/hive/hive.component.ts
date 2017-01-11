/**
 * Created by goran.pavlovski on 12/30/2016.
 */

import {Component, OnInit} from "@angular/core";
import {DataService} from "../core/services/data.service";
import {Hive} from "../shared/interfaces";
import {HiveService} from "./hive.service";
@Component({
    selector: 'bk-hive',
    template: require('./hive.component.html'),
    styles: [require('./hive.component.scss')]
})

export class HiveComponent implements OnInit{

    hives: Hive[];

    constructor(private hiveService: HiveService){

    }

    ngOnInit(): void {

        this.getAllHives()

    }


    getAllHives(){
        this.hiveService.getAllHives()
            .subscribe((hives: Hive[]) => {
                this.hives = hives
            })
    }

}