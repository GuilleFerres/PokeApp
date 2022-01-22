import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) { }
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.apiUrl}`);
  }
  getDataPokemons(url: string) {
    return this.http.get<Pokemon[]>(`${url}`);
  }
  buscarNombre(termino: string){
    return this.http.get(`${this.apiUrl}/${termino}`);
  }
}
