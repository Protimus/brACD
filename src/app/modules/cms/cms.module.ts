import { NgModule } from '@angular/core';

import {routing} from './cms.routes'
import {TemplateComponent} from './template/template.component';
import { StatiticsComponent } from './statitics/statitics.component'

@NgModule({
  declarations: [
    TemplateComponent,
    StatiticsComponent
  ],
  imports: [
    routing
  ],
  providers: [],
  bootstrap: [TemplateComponent]
})

export class CmsModule { }
