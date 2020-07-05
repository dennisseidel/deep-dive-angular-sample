import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchDoctorsDrugsModule } from './search-doctors-drugs/search-doctors-drugs.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    SearchDoctorsDrugsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
