import React from 'react';
import characters from "../../characters.js";
import CharacterCard from "../CharacterCard";
import Wrapper from "../Wrapper";
import Navigation from "../Navigation";
import shuffle from "shuffle-array";
import "./Game.css";

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters,
            score: 0,
            topScore: 0,
            wins: 0,
            clicked: [],
            width: 0,
            height: 0,
            size: 3
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }

/*----------------------make the game screen fit the viewport------------------ */
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        if (this.state.width < 550) {
            this.setState({ size: 3 })
        }
        else {
            this.setState({ size: 2 })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
   


    /* ------------------Game Methods---------------------- */

    //this will use the other functions to make the game work
    handleClick = id => {
        if (this.state.clicked.indexOf(id) === -1) {
            //actually handle the increment
            this.handleIncrement();
            //put the clicked item, by id, into the clciked arrary with a concat
            this.setState({ clicked: this.state.clicked.concat(id) })
        } else {
            //if the id has already been clicked player loses and score resets
            this.handleReset();
        }
    }

    //======================================================================================

    handleIncrement = () => {
        const newScore = this.state.score + 1;
        this.setState({
            score: newScore
        });
        if (newScore >= this.state.topScore) {
            this.setState({ topScore: newScore });
        };
        if (newScore === 12){
            this.setState({ score: 0, topScore:0})
        }
        this.handleShuffle();
    }

    handleReset = () => {
        //this will reset the score if the player gets a wrong guess
        this.setState({
            score: 0,
            topScore: this.state.topScore,
            clicked: []
        });
    };

    //npm shuffle-array package
    handleShuffle = () => {
        let shuffled = shuffle(characters);
        this.setState({ characters: shuffled });
    }

    render() {
        const height = {height: window.innerHeight, widht: window.innerWidth}
        return (
            <div style={height} className="Game">
                <Navigation score={this.state.score} topScore={this.state.topScore} />
                <Wrapper>
                    {this.state.characters.map(character => (
                        <CharacterCard
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            image={character.image}
                            handleClick={this.handleClick}
                            handleIncrement={this.handleIncrement}
                            handleReset={this.handleReset}
                            handleShuffle={this.handleShuffle}
                        />
                    ))}
                </Wrapper>
            </div>
        )
    }
}