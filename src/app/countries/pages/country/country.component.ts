import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country!: Country;

  constructor(private activatedRoute: ActivatedRoute,
              private countryService: CountryService) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .pipe(
          switchMap( ({id})=> this.countryService.searchCountryByCode(id) )
        )
        .subscribe(country => this.country = country)
  }

}
