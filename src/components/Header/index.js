import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Pokémon Clicky Game!</h1>
                <p className="lead">Click on an image! Try not to click on any Pokémon more than once.</p>
            </div>
        </div>);
}

export default Header;
