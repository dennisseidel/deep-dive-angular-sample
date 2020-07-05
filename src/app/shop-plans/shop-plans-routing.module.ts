import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopPlansHomeComponent } from './shop-plans-home/shop-plans-home.component'

const routes: Routes = [{
  path: '',
  component: ShopPlansHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopPlansRoutingModule { }
