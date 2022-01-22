import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';

import { PcBillComponent } from './pc-bill/pc-bill.component';
import { PokedexComponent } from './pokemon/pokedex/pokedex.component';
import { BolsaComponent } from './bolsa/bolsa.component';
import { StartComponent } from './start/start.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { AddPokemonComponent } from './pc-bill/add-pokemon/add-pokemon.component';
import { BreakFreeComponent } from './pc-bill/break-free/break-free.component';




@NgModule({
  declarations: [
    PokedexComponent,
    BolsaComponent,
    StartComponent,
    AuthComponent,
    PokemonComponent,
    PokemonDetailComponent,
    BreakFreeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimeNgModule,
    FormsModule
  ],
  exports: [
    PokedexComponent,
    BolsaComponent,
    StartComponent
  ]
})
export class PagesModule { }
