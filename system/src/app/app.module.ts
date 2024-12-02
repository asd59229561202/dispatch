import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router'; // Correct import for RouterModule

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { routes } from './app-routing.module';
import { NonAuthComponent } from './components/non-auth/non-auth.component';
import { DialogService } from 'ngx-bootstrap-modal';


@NgModule({
  declarations:[
    AppComponent,
    HeaderComponent,
    NonAuthComponent
  ],

  imports: [
    RouterOutlet, 
    FooterComponent,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],

  providers:[],
  
  bootstrap: [AppComponent]

})
export class AppModule { }
