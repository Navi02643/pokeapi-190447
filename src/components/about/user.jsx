import React, { useState, useContext } from "react";

import { GlobalContext } from "../../context/context-global";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import en from "../../assets/img/usa.png"
import es from "../../assets/img/mxm.svg"

function Username() {
  const [name, SetName] = useState("");
  const { handleUser } = useContext(GlobalContext);
  const { i18n, t } = useTranslation();

  function changeLaguage(language) {
    i18n.changeLanguage(language);
  }

  return (
    <Container style={{paddingTop:110}} maxWidth="sm" fixed>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack
          sx={{
            width: "25ch",
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
            <h1>{t("txtlogin")}</h1>
          <TextField
            id="outlined-multiline-flexible"
            label={t("txtuser")}
            multiline
            maxRows={4}
            onChange={(event) => {
              SetName(event.target.value);
            }}
          />
          <hr />
          <Link
            className="btn btn-success"
            to="/pokemons"
            onClick={() => {
              handleUser(name);
            }}
          >
            {t("btncon")}
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 2, display: { xs: "none", sm: "block" } }}
          >
            <h5>{t("idiom")}</h5>
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
        </Stack>
      </Box>
    </Container>
  );
}

export default Username;
