import React, { Component } from "react";
import Picture from "./components/Picture";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import pokemons from "./pokemon.json";

class App extends Component {
  // set the initial state
  state = {
    pokemons,
    clicked: [],
    score: 0,
    topScore: 0,

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <>
        <NavBar 
        score={this.state.score} 
        topScore={this.state.topScore}/>
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
