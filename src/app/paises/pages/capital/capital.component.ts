import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css'],
})
export class CapitalComponent {
  label: string = 'por capital';
  paises: Pais[] = [];
  isLoading: boolean = false;
  errorMessage: boolean = false;

  constructor(private paisesService: PaisesService) {}

  procesarQuery(query: string) {
    this.errorMessage = false;
    this.isLoading = true;
    this.paisesService
      .obtenerPaisPorCapital(query)
      .pipe(
        catchError((err) => {
          return of([]);
        })
      )
      .subscribe((paises) => {
        this.isLoading = false;
        if (!paises.length) this.errorMessage = true;
        this.paises = paises;
      });
  }
}
