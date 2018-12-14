import React from "react";
import "./Jumbotron.css";
import Responsive from 'react-responsive';
const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} minWidth={480} maxWidth={767} />;
const Mini = props => <Responsive {...props} maxWidth={479} />;

export default class jumbotron extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0, size: 3 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

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


    render() {
        const height = {height: window.innerHeight, width: window.innerWidth}
        return (
            <React.Fragment>
            <Desktop> 
                <div style={height} className="jumbotron">
                    <div className="container">
                    <span className="top">Adventure Time Memory game</span>

                    <br/>
                    
                    <span className="instructions">Try to select each of the 12 characters in a row 
                    
                    <br/>
                    
                    without selecting any of them twice!</span>
                    </div>
                </div>
            </Desktop>
            <Tablet>
             <div style={height} className="jumbotron">
                    <div className="container">
                    <span className="top">Adventure Time Memory game</span>

                    <br/>
                    
                    <span className="instructions">Try to select each of the 12 characters in a row 
                    
                    <br/>
                    
                    without selecting any of them twice!</span>
                    </div>
                </div>
            </Tablet>
            <Mobile>
             <div style={height} className="jumbotron">
                    <div className="container">
                    <span style={{fontSize: "2.4rem"}} className="top">Adventure Time Memory game</span>

                    <br/>
                    
                    <span style={{fontSize: "1.2rem"}} className="instructions">Try to select each of the 12 characters in a row 
                    
                    <br/>
                    
                    without selecting any of them twice!</span>
                    </div>
                </div>
            </Mobile>
            <Mini>
                <div style={height} className="jumbotron">
                    <div className="container">
                    <span style={{fontSize: "2rem"}} className="top">Adventure Time Memory game</span>

                    <br/>
                    
                    <span style={{fontSize: "1.2rem"}} className="instructions">Try to select each of the 12 characters in a row 
                    
                    <br/>
                    
                    without selecting any of them twice!</span>
                    </div>
                </div>
            </Mini>
            </React.Fragment>
        );
    }

}
