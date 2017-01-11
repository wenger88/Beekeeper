/**
 * Created by goran.pavlovski on 1/11/2017.
 */


import {NgModule} from "@angular/core";
import {HiveComponent} from "./hive.component";
import {HiveItemComponent} from "./hive-item/hive-item.component";
import {HiveDetailsComponent} from "./hive-details/hive-details.component";
import {HiveCreateComponent} from "./hive-create/hive-create.component";
import {HiveService} from "./hive.service";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule

    ],
    declarations: [
        HiveComponent,
        HiveItemComponent,
        HiveDetailsComponent,
        HiveCreateComponent
    ],
    providers: [HiveService]
})

export class HiveModule{}