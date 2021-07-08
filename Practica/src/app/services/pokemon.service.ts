import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { pokemonList } from '../others/interfazPokemones'
import { Pokemon } from '../others/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"

  getPokemonList(): Observable<pokemonList>{
    return this.http.get<pokemonList>(`${this.url}`)
  }

}
