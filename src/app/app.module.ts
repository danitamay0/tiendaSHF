import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MaterialModule} from './material/material.module'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CategoryComponent } from './components/category/category.component';

import { HttpClientModule } from '@angular/common/http';
import { ShopsComponent } from './components/shops/shops.component';
import { PromosComponent } from './components/promos/promos.component';
import { ShopModalComponent } from './components/shop-modal/shop-modal.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PagesComponent,
    CategoryComponent,
    ShopsComponent,
    PromosComponent,
    ShopModalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
