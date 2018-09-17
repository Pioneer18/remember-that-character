//Navbar for displaying the score and basic instructions
import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <nav className="navbar">
            <ul className="nav">
                <li className="brand"><a href="/">Remember Adventure Time</a></li>
                <li className="instructions">Click on an Adventure Character to begin!</li>
                <li className="display">"Score: "
                    "0"
                    " | Top Score: "
                    "0"
                </li>
            </ul>
    </nav>
)

export default Navbar;