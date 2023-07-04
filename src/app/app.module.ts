import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
  

    HomeComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
