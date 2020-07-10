import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDoctorsDrugsRoutingModule } from './search-doctors-drugs-routing.module';
import { SearchDoctorsDrugsHomeComponent } from './search-doctors-drugs-home/search-doctors-drugs-home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultListComponent } from './result-list/result-list.component';


@NgModule({
  declarations: [SearchDoctorsDrugsHomeComponent, SearchBarComponent, ResultListComponent],
  imports: [
    CommonModule,
    SearchDoctorsDrugsRoutingModule
  ]
})
export class SearchDoctorsDrugsModule { }
