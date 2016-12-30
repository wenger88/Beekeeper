
import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ApiaryComponent} from "./apiary/apiary.component";
import {HiveComponent} from "./hive/hive.component";
const APP_ROUTES_PROVIDERS: Routes = [

    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
            title: 'Dashboard'
        }
    },
    {
        path: 'apiary',
        component: ApiaryComponent,
        data: {
            title: 'Apiaries'
        }
    },
    {
        path: 'hives',
        component: HiveComponent,
        data: {
            title: 'Hives'
        }
    }

];

export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);