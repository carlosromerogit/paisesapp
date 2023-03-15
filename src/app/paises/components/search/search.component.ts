import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @ViewChild('query') query!: ElementRef<HTMLInputElement>;

  @Input() label: string = '';

  @Output() emitirQuery: EventEmitter<string> = new EventEmitter();

  constructor() {}

  enviarQuery() {
    const query = this.query.nativeElement.value.toLowerCase().trim();
    if (!query) return;
    this.emitirQuery.emit(query);
    this.query.nativeElement.value = '';
  }
}
