
import {Routes, RouterModule, provideRoutes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { TemplateComponent } from './template/template.component';
import { StatiticsComponent } from 'app/modules/cms/statitics/statitics.component';


const APP_ROUTES: Routes = [
    {path: '', component: TemplateComponent, children:[
        {path: 'estatisticas', component: StatiticsComponent}
    ]},
]

export const routing: ModuleWithProviders = RouterModule.forChild(APP_ROUTES);