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
    score: 0,
    topScore: 0,
    clicked:[]
  };

  handleClick = () => {
    
  }

  handleIncrement = () => {

    const newScore = this.state.score +1;
    console.log("Increment counter " + newscore);
    this.setState({
      score: newScore
    });
    if (newScore >= this.state.topScore) {
      this.setState({topScore: newScore});
    }
    else if (newScore === 12) {
      console.log("you Win!")
    }
  }

  handleReset = () => {

  }

  handleShuffle = () => {
    
  }

  render() {
    return(
      <React.Fragment>
        <Nav
          score={this.state.score}
          topscore={this.state.topScore}
        />
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