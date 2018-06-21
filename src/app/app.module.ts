import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CryptoService } from '../services/cyrpto.service';
import { AppComponent } from './app.component';
import { CryptoTableComponent } from './../crypto-table/crypto-table.component';


@NgModule({
  declarations: [
    AppComponent,
    CryptoTableComponent    
  ],
  imports: [
 
  BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
