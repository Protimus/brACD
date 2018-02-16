
import {Routes, RouterModule, provideRoutes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';


const APP_ROUTES: Routes = [
    {path: '', loadChildren: '../public/public.module#PublicModule'},
    {path: 'cms', loadChildren: '../cms/cms.module#CmsModule'}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);