import React from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./App.css";

const App = () => (
  <Wrapper>
    <h1 className="title">Character List</h1>
    <CharacterCard
      name={characters[0].name}
      image={characters[0].image}
      occupation={characters[0].occupation}
      location={characters[0].location}
    />
    <CharacterCard
      name={characters[1].name}
      image={characters[1].image}
      occupation={characters[1].occupation}
      location={characters[1].location}
    />
    <CharacterCard
      name={characters[2].name}
      image={characters[2].image}
      occupation={characters[2].occupation}
      location={characters[2].location}
    />
  </Wrapper>
);

export default App;
