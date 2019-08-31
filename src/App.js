import React, { Component } from "react";
import Picture from "./components/Picture";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import pokemons from "./pokemon.json";
import Score from "./components/score.js";

class App extends Component {
  // set the initial state
  state = {
    pokemons,
    clicked: [],
    score: 0,
    topScore: 0,
    gameEnded: false,

  };

  // this is what happens when the user clicks on a picture
  userClick = event => {
    event.preventDefault();

    console.log("guessed: " + this.state.clicked);

    // gets the alt attribute from the image and saves it to a variable
    const clickedOn = event.target.alt;

    // if the picture is not in the clicked array, it brings back a -1
    let inGuessed = this.state.clicked.indexOf(clickedOn);

    console.log(inGuessed);

    // if its -1, it updates the score else it resets the score to 0 and click to blank
    if(inGuessed === -1){
      this.setState({score: this.state.score + 1},
        () => {
          if(this.state.score === 8){
            this.setState({gameEnded: true});
          }})
    } else{
      this.setState({
        score: 0,
        clicked: []})
    }

    this.setState({clicked: this.state.clicked.concat(clickedOn)})
    console.log("guessed: " + this.state.clicked);
    
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(this.state.gameEnded);
    let message;
    if (this.state.gameEnded){
      message = <Score/>
    }
    return (
      <>
        <NavBar
        gameEnded={this.state.gameEnded} 
        score={this.state.score} 
        topScore={this.state.topScore}/>
        <Header />
        {message}
        <Wrapper>
          {this.state.pokemons.map(pokemon => (
          <Picture
            userClick={this.userClick}
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
