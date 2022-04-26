import React from "react";
import { Link } from "react-router-dom";
import * as Types from "./types";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-center mt-3">
      <Link to="/" className="btn btn-primary nav-link mx-2 text-light">
        Home
      </Link>
      <Link to="/pokedex" className="btn btn-primary nav-link mx-2 text-light">
        Pokedex
      </Link>
      <Link to="/boxes" className="btn btn-primary nav-link mx-2 text-light">
        Boxes
      </Link>
      <Link to="/milestones" className="btn btn-primary nav-link mx-2 text-light">
        Milestones
      </Link>
    </nav>
  );
};

export default Navbar;
