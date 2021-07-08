import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../others/pokemon';

@Injectable({
  providedIn: 'root'
})
export class GetPokeService {

  constructor(private http: HttpClient) { }

  getPokemon(name: string) {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

}
