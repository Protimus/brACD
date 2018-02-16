import { NgModule } from '@angular/core';

import {routing} from './cms.routes'
import {TemplateComponent} from './template/template.component'

@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    routing
  ],
  providers: [],
  bootstrap: [TemplateComponent]
})

export class CmsModule { }
