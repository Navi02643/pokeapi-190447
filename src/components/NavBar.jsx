import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">Poke Api - 190447</Link>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link className="btn btn-outline-success" to="/search">Search</Link>
          </form>
        </div>
      </nav>
      
  );
}

export default NavBar;
