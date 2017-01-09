import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent }   from './app.component';
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar-nav.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ApiaryListComponent} from "./apiary/apiary-list.component";
import {HiveComponent} from "./hive/hive.component";
import {DataService} from "./core/services/data.service";
import {ApiaryItemComponent} from "./apiary/apiary-item/apiary-item.component";
import {ApiaryDetailsComponent} from "./apiary/apiary-details/apiary-details.component";
import {HiveDetailsComponent} from "./hive/hive-details/hive-details.component";
import {HiveCreateComponent} from "./hive/hive-create/hive-create.component";
import {ApiaryCreateComponent} from "./apiary/apiary-create/apiary-create.component";
import {HiveItemComponent} from "./hive/hive-item/hive-item.component";

@NgModule({
	imports: [
		FormsModule,
        ReactiveFormsModule,
		HttpModule,
		BrowserModule,		
		routing,
		NgbModule.forRoot()
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		SidebarComponent,
        DashboardComponent,
        ApiaryListComponent,
		ApiaryItemComponent,
        ApiaryDetailsComponent,
        ApiaryCreateComponent,
        HiveComponent,
        HiveItemComponent,
        HiveDetailsComponent,
		HiveCreateComponent
	],
	providers: [DataService],
	exports: [],
	bootstrap: [AppComponent],
})

export class AppModule {}
