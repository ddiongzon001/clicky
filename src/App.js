import React, { Component } from "react";
import Picture from "./components/Picture";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import pokemons from "./pokemon.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    pokemons
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <>
        <NavBar />
        <Header />
        <Wrapper>
          {this.state.pokemons.map(pokemon => (
          <Picture
            id={pokemon.id}
            key={pokemon.id}
            image={pokemon.image}
          />
          ))}
        </Wrapper>
      </>
    );
  }
}

export default App;
