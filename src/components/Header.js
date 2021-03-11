import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <hr/>
      <p className="compBound">Header Start</p>
      <h1>Soil-Ent-Green</h1>
      <ul>
        <li>
          <Link to = "/">Home</Link>
        </li>
        <li>
          <Link to = "/signin">Sign In</Link>
        </li>
      </ul>
      <p className="compBound">Header End</p>
      <hr/>
    </>  
  );
}

export default Header;