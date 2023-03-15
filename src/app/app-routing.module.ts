import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from './paises/pages/pais/pais.component';
import { CapitalComponent } from './paises/pages/capital/capital.component';
import { RegionComponent } from './paises/pages/region/region.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path: 'pais',
    component: PaisComponent,
  },
  {
    path: 'capital',
    component: CapitalComponent,
  },
  {
    path: 'region',
    component: RegionComponent,
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent,
  },
  {
    path: '**',
    redirectTo: 'pais',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
