/**
 * Created by goran.pavlovski on 1/9/2017.
 */

import {Component, OnInit} from "@angular/core";
import {DataService} from "../../core/services/data.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {Response} from "@angular/http";
import {Hive, Apiary} from "../../shared/interfaces";
import {HiveService} from "../hive.service";
import {ApiaryService} from "../../apiary/apiary.service";
@Component({
    selector: 'bk-hive-create',
    template: require('./hive-create.component.html'),
    styles: [require('./hive-create.component.scss')]
})

export class HiveCreateComponent implements OnInit{

    hiveForm: FormGroup;
    hiveTypes: any[];
    hive = <Hive>{};
    apiary: Apiary;
    apiaries: Apiary[];
    hasApiaryId: boolean;
    myArray: any[] = [];

    constructor(private hiveService: HiveService, private apiaryService: ApiaryService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute){}

    ngOnInit(): void {

        this.getAllHiveTypes();
        this.getAllApiaries();

        this.route.params.subscribe((params: Params) => {

            if (Object.getOwnPropertyNames(params).length !== 0){
                this.apiaryService.getSingleApiary(params['id'])
                    .subscribe((apiary: Apiary) =>{
                        this.apiary = apiary;
                        this.hive.apiaryId = this.apiary.id;
                        this.hasApiaryId = true;
                    })
            }else{
                this.hasApiaryId = false;
            }


        })

        this.hiveForm = this.fb.group({
            name: new FormControl('', [Validators.required]),
            typeId: new FormControl('', [Validators.required]),
            active: new FormControl(false),
            frameNumber: new FormControl('', [Validators.required]),
            queen: new FormControl(false),
            queenColor: new FormControl(''),
            note: new FormControl(''),
            date: new FormControl(new Date()),
            apiaryId: new FormControl('')
        })
    }

    getAllHiveTypes(){
        this.hiveService.getAllHiveTypes()
            .subscribe((types: Response[]) => {
                this.hiveTypes = types
            })
    }

    getAllApiaries(){
        this.apiaryService.getAllApiaries()
            .subscribe((apiaries: Apiary[]) => this.apiaries = apiaries)
    }

    multiHives(value: any){

    }

    onSubmit(value: any){

            for (var i = 0; i < value; i++){


                Object.assign(this.hive, this.hiveForm.value);
                console.log(this.hiveForm['controls']['name'].value);

                if (this.hasApiaryId){
                    this.hive.apiaryId = this.apiary.id;
                    this.hasApiaryId = true;
                    this.myArray.push(this.hive);
                    this.myArray[i].name = this.myArray[i].name + '-' + i;
                    this.hiveService.addHive(this.hive)
                        .subscribe(
                            (data) => {
                                this.router.navigate(['/details', this.apiary.id])
                            },
                            error => console.log("Error HTTP Post Service"), // in case of failure show this message
                            () => console.log("Job Done Post !")
                        )
                }else{
                    this.hiveService.addHive(this.hive)
                        .subscribe(
                            (data) => {
                                this.hasApiaryId = false;
                                this.router.navigate(['/hives'])
                            },
                            error => console.log("Error HTTP Post Service"), // in case of failure show this message
                            () => console.log("Job Done Post !")
                        )
                }

            console.log(this.myArray)

        }

        /*Object.assign(this.hive, this.hiveForm.value);

        if (this.hasApiaryId){
            this.hive.apiaryId = this.apiary.id;
            this.hasApiaryId = true;
            this.hiveService.addHive(this.hive)
                .subscribe(
                    (data) => {
                        this.router.navigate(['/details', this.apiary.id])
                    },
                    error => console.log("Error HTTP Post Service"), // in case of failure show this message
                    () => console.log("Job Done Post !")
                )
        }else{
            this.hiveService.addHive(this.hive)
                .subscribe(
                    (data) => {
                        this.hasApiaryId = false;
                        this.router.navigate(['/hives'])
                    },
                    error => console.log("Error HTTP Post Service"), // in case of failure show this message
                    () => console.log("Job Done Post !")
                )
        }*/


    }



}