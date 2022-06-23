import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  active:string = 'countries';

  constructor() { }

  ngOnInit(): void {
  }
  activate(param:string){
    this.active = param;
  }

}
