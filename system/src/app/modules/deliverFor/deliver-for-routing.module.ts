import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliverForComponent } from './deliver-for/deliver-for.component';


const routes: Routes = [
  {path:'',
  component:DeliverForComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliverForRoutingModule { }
