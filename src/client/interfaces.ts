export interface PokemonData {
  name: string;
  url: string;
  id: number;
  img?: string; // https://stackoverflow.com/questions/41791933/in-typescript-what-is-the-type-of-image -- Alternatively, this can be a url pointing to the pic on the api or they link to git
}
export interface Loginprops {
  username: string;
  password: string;
}
export interface PokedexProps {
  pokemonList: Array<PokemonData>;
}
export interface BoxesProps {}
export interface MilestonesProps {}
