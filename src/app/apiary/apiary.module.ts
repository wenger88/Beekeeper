/**
 * Created by goran.pavlovski on 1/11/2017.
 */


import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {ApiaryListComponent} from "./apiary-list.component";
import {ApiaryItemComponent} from "./apiary-item/apiary-item.component";
import {ApiaryDetailsComponent} from "./apiary-details/apiary-details.component";
import {ApiaryCreateComponent} from "./apiary-create/apiary-create.component";
import {ApiaryService} from "./apiary.service";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        ApiaryListComponent,
        ApiaryItemComponent,
        ApiaryDetailsComponent,
        ApiaryCreateComponent
    ],
    providers: [ApiaryService]
})

export class ApiaryModule{}