import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  exports: [SidebarComponent, HeaderComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class SharedModule {}
