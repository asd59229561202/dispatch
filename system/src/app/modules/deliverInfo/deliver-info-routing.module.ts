import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliverInfoComponent } from './deliver-info/deliver-info.component';

const routes: Routes = [
  {path:'',
    component:DeliverInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliverInfoRoutingModule { }
