import React from "react";
import "./Header.css";

const Header = props =>(
    <div>
        <nav className="navbar navbar-default header">
        <div className="container">
            <h1>Gummi Bears Clicky Game</h1>
            <p>Click pics to earn points, but make sure its only once</p>
            <h2>Current Score: <span className="score-span">{props.score}</span></h2>
        </div>
        </nav>
    </div>
);

export default Header;