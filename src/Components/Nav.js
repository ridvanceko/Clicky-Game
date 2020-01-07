import React from "react";
function Nav(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Clicky Game
      </a>
      <div className="float-center">
        <h4>{props.lost ? "YOU LOST!" : ""}</h4>
      </div>
      <div className="float-right">
        Score: {props.score}| Top Score{props.highScore}
      </div>
    </nav>
  );
}
export default Nav;