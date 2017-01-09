
import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ApiaryListComponent} from "./apiary/apiary-list.component";
import {HiveComponent} from "./hive/hive.component";
import {ApiaryDetailsComponent} from "./apiary/apiary-details/apiary-details.component";
import {HiveDetailsComponent} from "./hive/hive-details/hive-details.component";
import {HiveCreateComponent} from "./hive/hive-create/hive-create.component";
import {ApiaryCreateComponent} from "./apiary/apiary-create/apiary-create.component";
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
        component: ApiaryListComponent,
        data: {
            title: 'Apiaries'
        }
    },
    {
        path: 'details/:id',
        component: ApiaryDetailsComponent,
        data: {
            title: 'Apiary Details'
        }
    },
    {
        path: 'create-apiary',
        component: ApiaryCreateComponent,
        data: {
            title: 'Create Apiary'
        }
    },
    {
        path: 'hives',
        component: HiveComponent,
        data: {
            title: 'Hives'
        }
    },
    {
        path: 'hive-details/:id',
        component: HiveDetailsComponent,
        data: {
            title: 'Hive Details'
        }
    },
    {
        path: 'hive-create/:id',
        component: HiveCreateComponent,
        data: {
            title: 'Create Hive'
        }
    },
    {
        path: 'hive-create',
        component: HiveCreateComponent,
        data: {
            title: 'Create Hive'
        }
    }


];

export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);