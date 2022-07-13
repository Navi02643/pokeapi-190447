import React, { useState, useContext }  from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context-global";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function SearchAppBar() {
    const [NameNum, SetNameNum] = useState("");
  const { handleCount } = useContext(GlobalContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link className="navbar-brand" to="/pokemons">
              Poke Api - 190447
            </Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link className="navbar-brand" to="/matricula">
              About
            </Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                pattern="[A-Za-z ]"
                onChange={(event) => {
                  SetNameNum(event.target.value);
                }}
              />
              <Link
                className="btn btn-success"
                to="/search"
                onClick={() => {
                  handleCount(NameNum.toString());
                }}
              >
                Search
              </Link>
            </form>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
