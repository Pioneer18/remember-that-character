import React from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./App.css";

const App = () => {
    return(
    <React.Fragment>
      {characters.map(character => 
      <Wrapper>
        <h1 className="title">Character List</h1>
        <CharacterCard
          name={characters[0].name}
          image={characters[0].image}
          occupation={characters[0].occupation}
          location={characters[0].location}
        />
      </Wrapper>
      )}
    </React.Fragment>
    )
  }

export default App;
