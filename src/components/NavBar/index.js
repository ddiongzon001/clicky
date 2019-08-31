import React from "react";
import "./style.css";


function NavBar(props) {

  return (
    <nav className="navbar navbar-dark sticky-top">
      <h1 className="title">Pokémon Clicky Game</h1>
      <h1 className="score">Score: {props.score} | Top Score: {props.topScore}</h1>
    </nav>);
}

export default NavBar;
