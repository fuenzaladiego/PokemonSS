import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Pokemon } from '../../others/interfazPokemones'
import { Observable } from 'rxjs';


@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  /*
  pokeAux: Pokemon = [{
    count: 10,
    next: "string",
    previous: "string",
    results: [{
      name: "string",
      url: "string"
    }]
  }]*/
  /*
  pokeIdentifier: string = ""
  urlImage: string = ""
  pokemonType: string = ""
  pokemonNumber: number = 1
  */
  //pokemonList: [Pokemon] = [this.pokeAux]
   
  pokemon$ = new Observable<Pokemon | null>();


  constructor(private PokemonService : PokemonService) { }

  ngOnInit(): void {
  }
  showPokemons() {
    
    this.pokemon$ = this.PokemonService.getPokemon() // Observables terminan con $ ej pokemon$
    console.log(this.pokemon$)
  }


}
