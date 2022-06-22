import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downtown',
  templateUrl: './downtown.component.html',
  styleUrls: ['./downtown.component.css']
})
export class DowntownComponent implements OnInit {

  placeholder: string = 'Search downtown...';

  constructor() { }

  ngOnInit(): void {
  }

  fetchDowntown(query:string){
    console.log(query)
  }

}
