import React, {Component} from "react";
import Jumbotron from "./components/Jumbotron";
import Game from "./components/Game";
import "./App.css";

class App extends Component {
  /* App in this case does not hold state, the game component does */
  render() {
    return(
      <React.Fragment className="App">
        <Jumbotron /> 
        <Game /> 
      </React.Fragment>
    )
  }
}

export default App;