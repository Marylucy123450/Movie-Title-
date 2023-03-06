import React from "react";
import { Link } from "react-router-dom";
import Homepage from "./homepage";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <button className="btn btn-outline-success">
              <h1 className="title">MOVIE HUB</h1>
            </button>
          </Link>
         
        </div>
        <div className="buttons-container">
          <Link to="/register">
            <button className="btn btn-success">Register Here</button>
          </Link>{" "}
          <Link to="/login">
            <button className="btn btn-success">Sign In Here</button>
          </Link>
        </div>
      </nav>
      <Homepage />
    </div>
  );
}

export default Navbar;

