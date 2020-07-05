import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchDoctorsDrugsHomeComponent } from './search-doctors-drugs-home/search-doctors-drugs-home.component';


const routes: Routes = [{
  path: 'search',
  component: SearchDoctorsDrugsHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchDoctorsDrugsRoutingModule { }
