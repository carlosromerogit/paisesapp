import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../interfaces/country.interface';

@Pipe({
  name: 'table'
})
export class TablePipe implements PipeTransform {

  transform(countries: Country[], byName: string, byPopulation: string): Country[] {
    if(byName == 'a-z'){
      return countries.sort( (a, b)=>{
        if(a.name > b.name){
          return 1;
        }else if(a.name < b.name){
          return -1;
        }else{
          return 0;
        }
      })
    }else if(byName == 'z-a'){
      return countries.sort( (a, b)=>{
        if(a.name > b.name){
          return -1;
        }else if(a.name < b.name){
          return 1;
        }else{
          return 0;
        }
      })
    }
    return countries;
 }
}
