/**
 * Created by goran.pavlovski on 1/9/2017.
 */

import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {DataService} from "../../core/services/data.service";
import {Router} from "@angular/router";
import {Apiary} from "../../shared/interfaces";
@Component({
    selector: 'bk-apiary-create',
    template: require('./apiary-create.component.html'),
    styles: [require('./apiary-create.component.scss')]
})

export class ApiaryCreateComponent implements OnInit{

    apiaryForm: FormGroup;
    apiary: Apiary;

    constructor(private dataService: DataService, private router: Router, private fb: FormBuilder){}

    ngOnInit(): void {

        this.apiaryForm = this.fb.group({
            name: new FormControl('', [Validators.required]),
            location: new FormControl('', [Validators.required]),
            note: new FormControl('', [Validators.required]),
            active: new FormControl(false),
            date: new FormControl(new Date())
        })

    }

    onSubmit(){
        this.dataService.addApiary(this.apiaryForm.value)
            .subscribe(
                (data) => {
                    this.router.navigate(['/apiary']);
                },
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")
            )
    }


}