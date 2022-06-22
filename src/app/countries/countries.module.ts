import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { DowntownComponent } from './pages/downtown/downtown.component';
import { RegionsComponent } from './pages/regions/regions.component';
import { CountryComponent } from './pages/country/country.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';
import { TablePipe } from './components/table.pipe';


@NgModule({
  declarations: [
    DowntownComponent,
    RegionsComponent,
    CountryComponent,
    CountriesComponent,
    SearchComponent,
    TableComponent,
    TablePipe,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
