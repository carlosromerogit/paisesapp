import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais.interface';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
})
export class PaisComponent {
  label: string = 'país';
  paises: Pais[] = [];
  isLoading: boolean = false;
  errorMessage: boolean = false;

  constructor(private paisesService: PaisesService) {
    this.paises = JSON.parse(localStorage.getItem('paises')!) || [];
  }
  procesarQuery(query: string) {
    this.paises = [];
    this.isLoading = true;
    this.errorMessage = false;
    this.paisesService
      .obtenerPais(query)
      .pipe(
        catchError((err) => {
          return of([]);
        })
      )
      .subscribe((paises) => {
        this.isLoading = false;
        if (!paises.length) this.errorMessage = true;
        this.paises = paises;
        localStorage.setItem('paises', JSON.stringify(this.paises));
      });
  }
}
