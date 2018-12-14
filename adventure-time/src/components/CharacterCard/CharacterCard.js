import React from "react";
import "./CharacterCard.css";
import Responsive from 'react-responsive';
const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} minWidth={482} maxWidth={767} />;
const Mini = props => <Responsive {...props} maxWidth={481} />;

const CharacterCard = props => (
  <React.Fragment>
    <Desktop>
      <div className="card" 
      style={{ 
        width:"13em",
        height:"13em",
        background: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor:"white"
      }} 
      value={props.id} onClick={() => props.handleClick(props.id)}>
        {props.name}
      </div>
    </Desktop>
    
    <Tablet>
      <div className="card" 
      style={{ 
        width:"10em",
        height:"10em",
        background: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor:"white"
      }} 
      value={props.id} onClick={() => props.handleClick(props.id)}>
        {props.name}
      </div>
    </Tablet>
    
    <Mobile>
      <div className="card" 
      style={{ 
        width:"6em",
        height:"6em",
        background: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor:"white",
        borderRadius: "3%"
      }} 
      value={props.id} onClick={() => props.handleClick(props.id)}>
        {props.name}
      </div>
    </Mobile>

    <Mini>
      <div className="card" 
      style={{ 
        width:"5.2em",
        height:"5.2em",
        background: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor:"white"
      }} 
      value={props.id} onClick={() => props.handleClick(props.id)}>
        {props.name}
      </div>
    </Mini>
  </React.Fragment>
);

export default CharacterCard;
