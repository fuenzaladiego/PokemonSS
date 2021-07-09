import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../others/pokemon';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
  transform(pokemons: Array<Pokemon>, option: string): Array<Pokemon> {

    let array: Array<Pokemon> = []
    if(option === 'all') return pokemons
    pokemons.forEach(e => {
      if (e.types[0].type.name === option) {
        array.push(e)
      }
    })
    return array;
    /*
    if (option === 'all' || option === undefined) return pokemons
    return pokemons.filter(pokemon => {
      pokemon.types[0].type.name === option;
    })*/
  }

}
