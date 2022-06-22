import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AsideComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    AsideComponent
  ]
})
export class SharedModule { }
