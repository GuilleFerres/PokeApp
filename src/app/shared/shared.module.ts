import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    MenuComponent,
    TableComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
