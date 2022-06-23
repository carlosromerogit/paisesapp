import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public countries: Country[]=[];

  public AllCountries: Country[]=[];

  ifError: boolean = false;

  constructor(private http: HttpClient) { }

  searchCountry(query:string){
    this.ifError = false;
    this.http.get<Country[]>(`https://restcountries.com/v2/name/${query}`)
             .subscribe(
              (countries) => {this.countries = countries},
              (err)=>{
                console.log(`${err.message}`)
                this.ifError = true;
                this.countries = [];
                this.AllCountries = [];
            })
  }
  getAllCountries(){
    this.http.get<Country[]>(`https://restcountries.com/v2/all`)
             .subscribe(countries => {
              this.AllCountries = countries
            })
  }

  searchByCapital(query:string){
    return this.http.get<Country[]>(`https://restcountries.com/v2/capital/${query}`)
  }

  refresh(){
    this.countries = [];
    this.getAllCountries();
    this.ifError = false;
  }
}
