import { GetPokeService } from './../../services/get-poke.service';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { pokemonList } from '../../others/interfazPokemones';
import { Pokemon } from 'src/app/others/pokemon';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';



@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  
   
  pokemonList$ = new Observable<pokemonList | null>();

  pokemon$ = new Observable<Pokemon | null>();
  pokemonLinks: Pokemon[] = []
  constructor( private PokemonService : PokemonService, private GetPokeService: GetPokeService) { }

  ngOnInit(): void {
    this.getPokemonList()
    this.fillPokemonLinks()
  
  }
  async fillPokemonLinks() {
    await this.pokemonList$.pipe(tap(data => {
      if (data) {
        data.results.forEach(e => {
          this.getPokemon(e.name)
          this.pokemon$.pipe(tap(f => {
            if (f) {
              this.pokemonLinks.push(f)

            }
          })).subscribe()
        })
      }
    })).subscribe()
    
    
  }
  

  getPokemon(name: string):any {
    this.pokemon$ = this.GetPokeService.getPokemon(name)
  }

  getPokemonList() {
    // Observables terminan con $ ej pokemon$
    this.pokemonList$ = this.PokemonService.getPokemonList()
    //console.log(this.pokemonList$)
  }



}
