//Navbar for displaying the score and basic instructions
import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <div className="navbar navbar-default navbar-fixed-top">
            <ul className="nav">
                <li className="brand"><a href="/">Remember Adventure Time</a></li>
                <li className="instructions">Click on an Adventure Character to begin!</li>
                <li className="display">"Score: "
                    "0"
                    " | Top Score: "
                    "0"
                </li>
            </ul>
    </div>
)

export default Navbar;