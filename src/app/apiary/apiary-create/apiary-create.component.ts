/**
 * Created by goran.pavlovski on 1/9/2017.
 */

import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Apiary} from "../../shared/interfaces";
import {ApiaryService} from "../apiary.service";


@Component({
    selector: 'bk-apiary-create',
    template: require('./apiary-create.component.html'),
    styles: [require('./apiary-create.component.scss')]
})

export class ApiaryCreateComponent implements OnInit{

    apiaryForm: FormGroup;
    apiary: Apiary;

    constructor(private apiaryService: ApiaryService,
                private router: Router,
                private fb: FormBuilder){}

    ngOnInit(): void {

        this.apiaryForm = this.fb.group({
            name: new FormControl('', [Validators.required]),
            location: new FormControl('', [Validators.required]),
            note: new FormControl('', [Validators.required]),
            active: new FormControl(false),
            date: new FormControl(new Date())
        });

    }


    onSubmit(){
        this.apiaryService.addApiary(this.apiaryForm.value)
            .subscribe(
                (data) => {
                    this.router.navigate(['/apiary']);
                },
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")
            )
    }


}
