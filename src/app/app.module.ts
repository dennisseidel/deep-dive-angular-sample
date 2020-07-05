import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchDoctorsDrugsModule } from './search-doctors-drugs/search-doctors-drugs.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    NavigationBarComponent
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
