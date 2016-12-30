import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent }   from './app.component';
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar-nav.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ApiaryComponent} from "./apiary/apiary.component";
import {HiveComponent} from "./hive/hive.component";

@NgModule({
	imports: [
		FormsModule,
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
        ApiaryComponent,
        HiveComponent
	],
	providers: [],
	exports: [],
	bootstrap: [AppComponent],
})

export class AppModule {}
