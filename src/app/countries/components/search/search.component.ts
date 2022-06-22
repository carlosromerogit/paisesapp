import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() placeholder: string = '';
  @Output() valueEmitter: EventEmitter<string> = new EventEmitter();
  @ViewChild('inputValue') InputValue!: ElementRef<HTMLInputElement>;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  sendValue(){
    let value = this.InputValue.nativeElement.value;
    value = value.trim().toLocaleLowerCase();
    if(value.length === 0){return}
    this.valueEmitter.emit(value);
    this.InputValue.nativeElement.value = '';
  }
  refresh(){
    this.countryService.refresh();
  }
}
