import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisComponent } from './pages/pais/pais.component';
import { CapitalComponent } from './pages/capital/capital.component';
import { RegionComponent } from './pages/region/region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';
import { ErrMessageComponent } from './components/err-message/err-message.component';

@NgModule({
  declarations: [
    PaisComponent,
    CapitalComponent,
    RegionComponent,
    VerPaisComponent,
    SearchComponent,
    TableComponent,
    ErrMessageComponent,
  ],
  exports: [PaisComponent, CapitalComponent, RegionComponent, VerPaisComponent],
  imports: [CommonModule],
})
export class PaisesModule {}
