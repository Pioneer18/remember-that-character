import React, {Component} from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import "./App.css";

class App extends Component {
  
  state = {
    characters,
    Score: 0,
    topscore: 0,
    clicked:[]
  };

  handleClick = () => {
    
  }

  handleIncrement = () => {

  }

  handleReset = () => {

  }

  handleShuffle = () => {
    
  }

  render() {
    return(
      <React.Fragment>
        <Nav/>
        <Jumbotron />
        <Wrapper>
          <h1 className="title">Adventure Time</h1>
          {this.state.characters.map(character => (
            <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            />
          ))}
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default App;