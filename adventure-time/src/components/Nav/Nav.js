import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav class="navbar navbar-light bg-faded justify-content-between flex-nowrap flex-row">
        <a href="/" class="navbar-brand">Adventure Time Game</a>
        <ul class="nav navbar-nav flex-row">
            <li class="nav-item"><a class="nav-link pr-3" href="">Score: {props.score}</a></li>
            <li class="nav-item"><a class="nav-link pr-3" href="">Score: {props.topScore}</a></li>
        </ul>
    </nav>
);

export default Nav;