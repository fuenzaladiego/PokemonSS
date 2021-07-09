import { GetPokeService } from './../../services/get-poke.service';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { pokemonList } from '../../others/interfazPokemones';
import { Pokemon } from 'src/app/others/pokemon';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { NamefilterPipe } from 'src/app/pipes/namefilter.pipe';



@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {

  pokemonList$ = new Observable<pokemonList | null>();
  pokemon$ = new Observable<Pokemon | null>();
  pokemonLinks: Pokemon[] = []
  option: string = "all"
  name: string = ""
  pokemonAux: Pokemon = {
    species: { name: "string" },
    sprites: { front_default: "string" },
    types: [{type :{name: "string"}}],
    id: -5
  }

  constructor( private PokemonService : PokemonService, private GetPokeService: GetPokeService) { }

  ngOnInit(): void {
    this.getPokemonList()
    this.fillPokemonLinks()
    
  }
  findPokemon(name: string) {
    if (this.pokemonLinks) {
      this.pokemonLinks.forEach(e => {
        if (e.species.name === name) {
          this.pokemonAux = e;
        }
      })
    }  
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
    this.pokemonList$ = this.PokemonService.getPokemonList()
  }



}
