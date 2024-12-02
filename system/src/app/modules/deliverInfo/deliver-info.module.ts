import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { DeliverInfoComponent } from './deliver-info/deliver-info.component';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [DeliverInfoComponent],
  imports: [
    CommonModule,
    SkeletonModule,
    TableModule,
    RouterLink, 
    ButtonModule,
    DialogModule
  ],
  providers:[]
})
export class DeliverInfoModule { }
