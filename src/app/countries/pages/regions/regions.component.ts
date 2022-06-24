import { Component, OnInit, QueryList } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  countries: Country[]=[];

  regions: string[]=["africa", "americas", "asia", "europe", "oceania"];

  activeRegion: string = '';

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  fetchCountries(region:string){
    if(this.activeRegion === region){return}
    this.countryService.searchCountriesByRegion(region)
        .subscribe(countries => {
          this.countries = countries;

        })
  }
  activateRegion(region: string){
    this.activeRegion = region;
  }

}
