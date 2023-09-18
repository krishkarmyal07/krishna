import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './mainfolder.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
  ]
})
export class NavbarModule { }
 

