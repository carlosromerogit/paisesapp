import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
})
export class RegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  active: string = '';
  isLoading: boolean = false;

  paises: Pais[] = [];

  constructor(private paisesService: PaisesService) {}

  activate(region: string) {
    this.active = region;
  }

  obtenerPais(region: string) {
    if (region == this.active) return;
    this.paises = [];
    this.isLoading = true;

    this.paisesService.obtenerPaisPorRegion(region).subscribe((resp) => {
      this.isLoading = false;
      this.paises = resp;
    });
  }
}
