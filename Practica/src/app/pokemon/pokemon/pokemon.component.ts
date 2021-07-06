import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Pokemon } from '../../others/interfazPokemon'
import { Observable } from 'rxjs';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {


  pokeIdentifier: string = ""
  urlImage: string = ""
  pokemonType: string = ""
  pokemonNumber: number = 1

   
  pokemon$ = new Observable<Pokemon | null>();


  constructor(private PokemonService : PokemonService) { }

  ngOnInit(): void {
  }
  search() {
    
    this.pokemon$ = this.PokemonService.getPokemon(this.pokeIdentifier) // Observables terminan con $ ej pokemon$
  }


}
