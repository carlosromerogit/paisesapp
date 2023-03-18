import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  pais!: Pais;
  isLoading: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paisService.obtenerPaisPorCodigo(id)))
      .subscribe((resp) => {
        this.pais = resp[0];
      });
  }
}
