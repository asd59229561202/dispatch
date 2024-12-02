import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext'; 
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { Message, MessageService } from 'primeng/api';
import { UserService } from '../../_services/user.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    
  ],
  
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    DividerModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    UserService,
    MessageService
  ],
})
export class AccountModule { }
