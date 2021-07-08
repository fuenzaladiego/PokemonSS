export interface Pokemon {
  species: { name: string },
  sprites: { front_default: string },
  types: [{type :{name: string}}],
  id: number
}