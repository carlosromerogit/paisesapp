import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../interfaces/country.interface';

@Pipe({
  name: 'byPopulation'
})
export class ByPopulationPipe implements PipeTransform {

  transform(countries: Country[], byPopulation: string): Country[] {

    if(byPopulation === 'higher'){
      return countries.sort((a,b)=> a.population - b.population)
    }else if(byPopulation === 'lower'){
      return countries.sort((a, b)=>b.population-a.population)
    }


    return countries;
  }

}
