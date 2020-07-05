import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDoctorsDrugsRoutingModule } from './search-doctors-drugs-routing.module';
import { SearchDoctorsDrugsHomeComponent } from './search-doctors-drugs-home/search-doctors-drugs-home.component';


@NgModule({
  declarations: [SearchDoctorsDrugsHomeComponent],
  imports: [
    CommonModule,
    SearchDoctorsDrugsRoutingModule
  ]
})
export class SearchDoctorsDrugsModule { }
