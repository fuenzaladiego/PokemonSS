import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../others/pokemon';

@Pipe({
  name: 'namefilter'
})
export class NamefilterPipe implements PipeTransform {

  pokemonAux: Pokemon = {
    species: { name: "string" },
    sprites: { front_default: "string" },
    types: [{type :{name: "string"}}],
    id: -5

  }
  transform(pokemons: Array<Pokemon>, name: string): any {


    pokemons.forEach(e => {
      if (e.species.name === name) {
        this.pokemonAux = e;
      }
      
    })
    if(this.pokemonAux.id != -5) return this.pokemonAux
    return 'No se encontro el pokemon'


  }

}
