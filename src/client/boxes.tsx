import React from "react";
import * as Types from "./types";
import { useNavigate } from "react-router-dom";

const Boxes = (props: Types.BoxesProps) => {
  const nav = useNavigate(); // lets us navigate the user around

  if (!props.pokemonList) {
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
        {props.pokemonList.map((pokemon) => (
          <div key={pokemon.name} className="card col-md-1 m-3">
            <div onClick={() => nav("/pokemondetails")} className="card title">
              {pokemon.name}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Boxes;
