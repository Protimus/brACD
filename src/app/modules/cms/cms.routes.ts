
import {Routes, RouterModule, provideRoutes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { TemplateComponent } from './template/template.component';
import { StatiticsComponent } from 'app/modules/cms/statitics/statitics.component';
import { TranslationComponent } from 'app/modules/cms/translation/translation.component';
import { ContactComponent } from 'app/modules/cms/contact/contact.component';


const APP_ROUTES: Routes = [
    {path: '', component: TemplateComponent, children:[
        {path: 'estatisticas', component: StatiticsComponent},
        {path: 'traducoes', component: TranslationComponent},
        {path: 'contato', component: ContactComponent}
    ]},
]

export const routing: ModuleWithProviders = RouterModule.forChild(APP_ROUTES);