import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  constructor(private http: HttpClient) {}

  obtenerPais(pais: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`https://restcountries.com/v3.1/name/${pais}`);
  }

  obtenerPaisPorCapital(capital: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(
      `https://restcountries.com/v3.1/capital/${capital}`
    );
  }

  obtenerPaisPorCodigo(codigo: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(
      `https://restcountries.com/v3.1/alpha/${codigo}`
    );
  }

  obtenerPaisPorRegion(region: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(
      `https://restcountries.com/v3.1/region/${region}`
    );
  }
}
