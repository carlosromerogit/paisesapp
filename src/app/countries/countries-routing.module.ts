import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './pages/countries/countries.component';
import { DowntownComponent } from './pages/downtown/downtown.component';
import { RegionsComponent } from './pages/regions/regions.component';
import { CountryComponent } from './pages/country/country.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:CountriesComponent
      },
      {
        path:'downtown',
        component:DowntownComponent
      },
      {
        path:'regions',
        component:RegionsComponent
      },
      {
        path:'country/:id',
        component:CountryComponent
      },
      {
        path:'**',
        redirectTo:'countries'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
