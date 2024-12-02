import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliverForRoutingModule } from './deliver-for-routing.module';
import { DeliverForComponent } from './deliver-for/deliver-for.component';
import { FocusTrapModule } from 'primeng/focustrap';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    DeliverForComponent,
    
  ],
  imports: [
    CommonModule,
    DeliverForRoutingModule,
    FocusTrapModule,
    CalendarModule,
    FormsModule,
    InputTextModule,
    ToastModule,
    ReactiveFormsModule,
    ConfirmDialogModule,// 如果這是一個 standalone 組件，確保導入 FocusTrapModule
    CommonModule,
    
  ]
})
export class DeliverForModule { }
