import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcBillComponent } from './pc-bill.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { BreakFreeComponent } from './break-free/break-free.component';
import { PokemonDetailComponent } from '../pokemon/pokemon-detail/pokemon-detail.component';


const routes: Routes = [
  {
    path: '',
    component: PcBillComponent,
    children: [
      {
        path:'add',
        component: AddPokemonComponent
      },
      {
        path:'breakfree',
        component: BreakFreeComponent
      },
      {
        path:':id',
        component: PokemonDetailComponent
      },
      {
        path:'**',
        redirectTo: ''
      }
    ]
  }
]

@NgModule({

  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class PcBillRoutingModule { }
