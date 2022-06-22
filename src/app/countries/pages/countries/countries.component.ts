import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  placeholder: string = 'Search countries...';

  get countries(){
    return this.countryService.countries;
  }

  get AllCountries(){
    return this.countryService.AllCountries;
  }
  get ifError(){
    return this.countryService.ifError;
  }

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getAllCountries();
  }

  fetchCountry(query:string){
    this.countryService.searchCountry(query)
  }
  refresh(){
    this.countryService.refresh();
 
  }

}
