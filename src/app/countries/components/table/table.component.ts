import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() countries: Country[] = [];

  

  byName: string = 'a-z';

  byPopulation: string = 'higher';

  constructor() { }

  ngOnInit(): void {
  }

  sortByName(){
    if(this.byName == 'a-z'){
        this.byName = 'z-a';
    }else if(this.byName == 'z-a'){
        this.byName = 'a-z';
    }
  }
  sortByPopulation(){
    if(this.byPopulation == 'higher'){
      this.byPopulation = 'lower';
    }else if(this.byPopulation == 'lower'){
      this.byPopulation = 'higher';
    }
  }

}
