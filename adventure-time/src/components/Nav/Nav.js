import React from "react";
import "./Nav.css";

//will get it's score props from App
const Nav = props => (
    <nav className="navbar navbar-light bg-faded justify-content-between flex-nowrap flex-row">
        <a href="/" className="navbar-brand">Adventure Time Game</a>
        <ul className="nav navbar-nav flex-row">
            <li className="nav-item"><a className="nav-link pr-3" href="">Score: {props.score}</a></li>
            <li className="nav-item"><a className="nav-link pr-3" href="">Top Score: {props.topScore}</a></li>
        </ul>
    </nav>
);

export default Nav;