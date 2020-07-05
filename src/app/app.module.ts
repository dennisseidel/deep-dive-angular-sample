import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchDoctorsDrugsModule } from './search-doctors-drugs/search-doctors-drugs.module';
import { ShopPlansModule } from './shop-plans/shop-plans.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    SearchDoctorsDrugsModule,
    ShopPlansModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
