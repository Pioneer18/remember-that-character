import React, {Component} from "react";
import Navbar from "./components/Navbar";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  
  state = {
    characters,
    Score: 0,
    topscore: 0,
    guess: "",
    clicked:[]
  }

  render() {
    return(
      <React.Fragment>
        <Navbar />
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