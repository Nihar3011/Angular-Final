import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { TextboxComponent } from './component/textbox/textbox.component';
import { CreateFormComponent } from './component/create-form/create-form.component';

@NgModule({
  declarations: [TextboxComponent, CreateFormComponent],
  imports: [
    CommonModule,
    DynamicFormRoutingModule
  ]
})
export class DynamicFormModule { }
