import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PcBillRoutingModule } from './pc-bill-routing.module';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';

import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { PcBillComponent } from './pc-bill.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddPokemonComponent,
    PcBillComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNgModule,
    PcBillRoutingModule,
    SharedModule
  ],
  exports: [
    AddPokemonComponent,
    PcBillComponent
  ]
})
export class PcBillModule { }
