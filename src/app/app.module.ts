import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import {AgmCoreModule} from "angular2-google-maps/core";

import { AppComponent }   from './app.component';
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar-nav.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ApiaryModule} from "./apiary/apiary.module";
import {HiveModule} from "./hive/hive.module";
import {LineChartDirective} from "./shared/line-chart.directive";
import {CustomChartComponent} from "./shared/custom-chart.component/custom-chart.component";
@NgModule({
	imports: [
		FormsModule,
        ReactiveFormsModule,
		HttpModule,
		BrowserModule,
		NgbModule.forRoot(),
		ApiaryModule,
        HiveModule,
		routing,


	],
	declarations: [
		AppComponent,
		HeaderComponent,
		SidebarComponent,
        DashboardComponent,
		LineChartDirective,
		CustomChartComponent

	],
	providers: [],
	exports: [],
	bootstrap: [AppComponent],
})

export class AppModule {}
