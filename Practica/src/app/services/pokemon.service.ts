import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pokemon } from '../others/interfazPokemon'
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = "https://pokeapi.co/api/v2/pokemon";
  constructor(private http: HttpClient) { }

  getPokemon(name : string): Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.url}/${name}`)
  }

}
