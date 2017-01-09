/**
 * Created by goran.pavlovski on 1/9/2017.
 */
import {Component, OnInit} from "@angular/core";
import {DataService} from "../../core/services/data.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Hive} from "../../shared/interfaces";
@Component({
    selector: 'bk-hive-details',
    template: require('./hive-details.component.html'),
    styles: [require('./hive-details.component.scss')]
})

export class HiveDetailsComponent implements OnInit{

    hive: Hive;

    constructor(private dataService: DataService, private route: ActivatedRoute){}


    ngOnInit(): void {

        this.route.params.subscribe((params: Params)=>{

            this.dataService.getSingleHive(params['id'])
                .subscribe((hive: Hive)=> {
                    this.hive = hive
                })

        })


    }

}