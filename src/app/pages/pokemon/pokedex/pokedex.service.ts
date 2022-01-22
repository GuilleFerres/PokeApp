import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TablePokemons } from '../../../shared/table/table.interface';
import { PokemonService } from '../pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }
  getPokemons() {
    return this.http.get('../../../assets/pokemons.json')
                .toPromise()
                .then(res => <TablePokemons[]> res!)
                .then(data => { return data; });
  }
}
