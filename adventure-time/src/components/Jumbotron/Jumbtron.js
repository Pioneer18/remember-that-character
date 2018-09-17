import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Adventure Time Memory Game</h1>
            <p class="lead">Click on an image to earn points, but don't click on any character more than once</p>
        </div>
    </div>
);

export default Jumbotron;