import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context-global"

function NavBar() {
  const [NameNum, SetNameNum] = useState("");
  const { handleCount } = useContext(GlobalContext);
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          Poke Api - 190447
        </Link>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={NameNum}
            onChange={(event) => {
              SetNameNum(event.target.value);
            }}
          />
          <Link className="btn btn-outline-success" to="/search" onClick={()=>{handleCount(NameNum.toString());}}>
            Search
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
