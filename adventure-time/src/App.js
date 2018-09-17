import React from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  
  state = {
    characters
  }

  render() {
    return(
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
    )
  }
}

export default App;