import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { NonAuthComponent } from './non-auth/non-auth.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
