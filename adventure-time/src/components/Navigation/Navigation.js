import React from "react";
import "./Navigation.css";
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    } from 'mdbreact';

    const text = {color:"#fff", padding: "0 1rem"}
    const navBack = {
        backgroundColor: "#000", 
        padding: ".5% 10%",
        width: "100%",
        position: "absolute"
      }

//will get it's score props from App
const Navigation = props => (
    
    <Navbar sticky="top" light style={navBack}  expand="md">
    
            <Nav  className="ml-auto" navbar>
            <NavItem>
                <NavLink style={text} to="#">Score: {props.score}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink style={text} to="#">Top Score: {props.topScore} out of 12</NavLink>
            </NavItem>
            </Nav>

    </Navbar>
 
);

export default Navigation;

/* <nav className="navbar navbar-light bg-faded justify-content-between flex-nowrap flex-row">
        <a href="/" className="navbar-brand">Adventure Time Game</a>
        <ul className="nav navbar-nav flex-row">
            <li className="nav-item"><a className="nav-link pr-3" href="">Score: {props.score}</a></li>
            <li className="nav-item"><a className="nav-link pr-3" href="">Top Score: {props.topScore}</a></li>
        </ul>
    </nav>
    
*/