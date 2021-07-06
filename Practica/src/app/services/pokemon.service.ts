import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pokemon } from '../others/interfazPokemones'
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=150";
  constructor(private http: HttpClient) { }

  getPokemon(): Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.url}`)
  }


}
