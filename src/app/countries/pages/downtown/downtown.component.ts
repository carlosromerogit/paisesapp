import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-downtown',
  templateUrl: './downtown.component.html',
  styleUrls: ['./downtown.component.css']
})
export class DowntownComponent implements OnInit {

  placeholder: string = 'Search by capital...';

  countries: Country[]=[];

  get ifError(){
    return this.countryService.ifError;
  }

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  fetchByCapital(query:string){
    this.countryService.ifError = false;
    this.countryService.searchByCapital(query)
        .subscribe(countries => {
          this.countries = countries
        }, (err)=>{
            console.log(err.message)
            this.countryService.ifError = true;
        })
  }

}
