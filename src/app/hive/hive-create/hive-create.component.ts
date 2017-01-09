/**
 * Created by goran.pavlovski on 1/9/2017.
 */

import {Component, OnInit} from "@angular/core";
import {DataService} from "../../core/services/data.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {Response} from "@angular/http";
import {Hive, Apiary} from "../../shared/interfaces";
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

    constructor(private dataService: DataService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute){}

    ngOnInit(): void {

        this.getAllHiveTypes();

        this.route.params.subscribe((params: Params) => {
            this.dataService.getSingleApiary(params['id'])
                .subscribe((apiary: Apiary) =>{
                    this.apiary = apiary;
                    this.hive.apiaryId = this.apiary.id;
                })
        })

        this.hiveForm = this.fb.group({
            name: new FormControl('', [Validators.required]),
            typeId: new FormControl('', [Validators.required]),
            active: new FormControl(false),
            frameNumber: new FormControl('', [Validators.required]),
            queen: new FormControl(false),
            queenColor: new FormControl(''),
            note: new FormControl(''),
            date: new FormControl(new Date())
        })
    }

    getAllHiveTypes(){
        this.dataService.getAllHiveTypes()
            .subscribe((types: Response[]) => {
                this.hiveTypes = types
            })
    }

    onSubmit(){
        Object.assign(this.hive, this.hiveForm.value);
        this.dataService.addHive(this.hive)
            .subscribe(
                (data) => {
                    this.router.navigate(['/details', this.apiary.id])
                },
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")
            )
    }



}