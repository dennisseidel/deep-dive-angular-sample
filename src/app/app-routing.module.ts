import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
  { path: 'home' , component: AppComponent},
  {
    path: 'search',
    loadChildren: () => import('./search-doctors-drugs/search-doctors-drugs.module').then(m => m.SearchDoctorsDrugsModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
