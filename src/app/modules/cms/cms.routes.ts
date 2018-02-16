
import {Routes, RouterModule, provideRoutes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { TemplateComponent } from './template/template.component';


const APP_ROUTES: Routes = [
    {path: '', component: TemplateComponent}
]

export const routing: ModuleWithProviders = RouterModule.forChild(APP_ROUTES);