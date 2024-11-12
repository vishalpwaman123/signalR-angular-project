import { NgModule, OnInit } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, ShoppingListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {
}
