import React from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

const App = () => (
  <Wrapper>
    <h1 className="title">Character List</h1>
    <CharacterCard
      name={friends[0].name}
      image={friends[0].image}
      occupation={friends[0].occupation}
      location={friends[0].location}
    />
    <CharacterCard
      name={friends[1].name}
      image={friends[1].image}
      occupation={friends[1].occupation}
      location={friends[1].location}
    />
    <CharacterCard
      name={friends[2].name}
      image={friends[2].image}
      occupation={friends[2].occupation}
      location={friends[2].location}
    />
  </Wrapper>
);

export default App;
