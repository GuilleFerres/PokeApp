import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolsaComponent } from './pages/bolsa/bolsa.component';
import { PcBillComponent } from './pages/pc-bill/pc-bill.component';
import { PokedexComponent } from './pages/pokemon/pokedex/pokedex.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    pathMatch: 'full'
  },
  {
    path: 'pcbill',
    loadChildren: () => import('./pages/pc-bill/pc-bill.module').then(m=> m.PcBillModule)
  },
  {
    path: 'pokedex',
    component: PokedexComponent,
  },
  {
    path: 'bolsa',
    component: BolsaComponent,
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m=> m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '',
  },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
