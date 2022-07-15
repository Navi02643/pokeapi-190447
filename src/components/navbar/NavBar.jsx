import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/context-global";
import { useTranslation } from "react-i18next";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import es from "../../assets/img/mxm.svg";
import en from "../../assets/img/usa.png";

export default function SearchAppBar() {
  const [NameNum, SetNameNum] = useState("");
  const { handleCount } = useContext(GlobalContext);
  const { i18n, t } = useTranslation();

  function changeLaguage(language) {
    i18n.changeLanguage(language);
  }
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
              {t("navitemLi")}
            </Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link className="navbar-brand" to="/matricula">
              {t("navitemAb")}
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
                placeholder="bulbasaur"
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
                {t("navsearch")}
              </Link>
            </form>
          </Typography>
          <Typography style={{ padding: 5 }}>
            <img
              style={{ width: 35, height: 25, margin: 5 }}
              src={en}
              alt="EN"
              onClick={() => {
                changeLaguage("en");
              }}
            />
            <img
              style={{ width: 35, height: 25, margin: 5 }}
              src={es}
              alt="ES"
              onClick={() => {
                changeLaguage("es");
              }}
            />
          </Typography>
          <Typography>
            <Link to="/pokemons"></Link>
          </Typography>
          <Typography>
            <Link to="/pokemons"></Link>
          </Typography>
          <Typography>
            <Link to="/pokemons"></Link>
          </Typography>
          <Typography>
            <Link to="/pokemons"></Link>
          </Typography>
          <Typography>
            <Link to="/pokemons"></Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
