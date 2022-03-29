import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Boxes from "./Boxes";
import Milestones from "./Milestones";
import Pokedex from "./Pokedex";
import * as Types from "../client/interfaces";
import Loginpage from "./login";

const App = (props: AppProps) => {
  const [pokemonList, setPokemonList] = useState<Types.PokemonData[]>([]);
  const [username, setUsername] = useState<string>("");
  const [loggedIn, setloggedIn] = useState<boolean>(false);

  useEffect(() => {
    async function getPokemon() {
      // fetches the list of 898 pokemon names and their endpoint
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=898&offset=0");
        const data = await res.json(); // data.results is an array of pokemon objects containing their name and endpoint
        let tempPokemonArray: Types.PokemonData[] = [];
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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/boxes">
          <Boxes />
        </Route>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
        <Route path="/milestones">
          <Milestones />
        </Route>
        <Route path="/">
          <Loginpage />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

interface AppProps {}

export default App;

{
  /* <Route path="/pokedex">
          <Pokedex pokemondata={pokemonList} />
        </Route> */
}
