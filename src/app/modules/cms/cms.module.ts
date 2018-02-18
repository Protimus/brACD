import { NgModule } from '@angular/core';

import {routing} from './cms.routes'
import {TemplateComponent} from './template/template.component';
import { StatiticsComponent } from './statitics/statitics.component';
import { TranslationComponent } from './translation/translation.component';
import { ContactComponent } from './contact/contact.component'

@NgModule({
  declarations: [
    TemplateComponent,
    StatiticsComponent,
    TranslationComponent,
    ContactComponent
  ],
  imports: [
    routing
  ],
  providers: [],
  bootstrap: [TemplateComponent]
})

export class CmsModule { }
