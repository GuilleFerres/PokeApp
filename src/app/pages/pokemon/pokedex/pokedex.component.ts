import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.interface';
import { PokemonService } from '../pokemon.service';



@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemons: Pokemon = {
    count: 0,
    next: '',
    previous: null,
    results: []
  };

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    // console.log(this.pokemonService.getPokemons().subscribe(pokemons => {
    //   return this.pokemons = pokemons;
    // }));
   this.pokemonService.getPokemons().subscribe((pokemon:any) => {

      this.pokemons.count = pokemon.count;
      this.pokemons.next = pokemon.next;
      this.pokemons.previous = pokemon.previous;
      this.pokemons.results = pokemon.results;
      console.log(this.pokemons.results);
      // this.pokemonService.getDataPokemons(this.pokemons.results[0].url).subscribe((info:any) => {
      //   console.log(info);
      // });
    });

  }



}
