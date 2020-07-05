import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopPlansRoutingModule } from './shop-plans-routing.module';
import { ShopPlansHomeComponent } from './shop-plans-home/shop-plans-home.component';
import { ProductCardComponent } from './product-card/product-card.component'


@NgModule({
  declarations: [ShopPlansHomeComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ShopPlansRoutingModule
  ]
})
export class ShopPlansModule { }
