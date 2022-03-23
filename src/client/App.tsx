import * as React from "react";
import { useState, useEffect } from "react";

const App = (props: AppProps) => {
  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);

  interface PokemonData {
    name: string;
    url: string;
    id: number;
    img?: string; // https://stackoverflow.com/questions/41791933/in-typescript-what-is-the-type-of-image
  }

  useEffect(() => {
    async function getPokemon() {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=898&offset=0");
        const data = await res.json(); // data.results is an array of pokemon objects
        let tempPokemonArray: PokemonData[] = [];
        data.results.map((item) => tempPokemonArray.push(item));
        setPokemonList(tempPokemonArray);
      } catch (error) {
        console.log(error);
      }
    }
    getPokemon();
  }, []);

  if (!pokemonList) {
    return (
      <main className="container my-5">
        <div>Loading...</div>
      </main>
    );
  }

  return (
    <main className="container my-5">
      <h1 className="text-primary text-center">Pokedex!</h1>
      <div className="d-flex flex-wrap">
        {pokemonList.map((pokemon) => (
          <div key={pokemon.name} className="card ">
            <div className="card title">{pokemon.name}</div>
            <button className="btn btn-primary">link</button>
          </div>
        ))}
      </div>
    </main>
  );
};

interface AppProps {}

export default App;
