import React, {Component} from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import shuffle from "shuffle-array";
import "./App.css";

class App extends Component {
  
  state = {
    characters,
    score: 0,
    topScore: 0,
    clicked:[]
  };

  //this will use the other functions to make the game work
  handleClick = () => {
    //make sure it registered
    conosle.log("clicked!");;
    if(this.state.clicked.indexOf(id) === -1) {
      console.log("plus 1");
      //actually handle the increment
      this.handleIncrement();
      //put the clicked item, by id, into the clciked arrary with a concat
      this.setState({clicked: this.state.clicked.concat(id)})
    } else{
      //if the id has already been clicked player loses and score resets
      console.log("doubled clicked");
      this.handleReset();
    }
  }

  handleIncrement = () => {
    const newScore = this.state.score +1;
    console.log("Increment counter " + newScore);
    this.setState({
      score: newScore
    });
    if (newScore >= this.state.topScore) {
      this.setState({topScore: newScore});
    }
    else if (newScore === 12) {
      console.log("you Win!");
    }
  }

  handleReset = () => {
    //this will reset the score if the player gets a wrong guess
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
    });
  }

  //npm shuffle-array package
  handleShuffle = () => {
      let shuffled = shuffle(characters);
      this.setState({characters: shuffled});
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
            handleIncrement={this.handleIncrement}
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