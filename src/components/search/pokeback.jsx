import React, { useContext, useState } from "react";

import NavBar from "../navbar/NavBar";

import { styled } from "@mui/material/styles";
import { GlobalContext } from "../../context/context-global";
import { useTranslation } from "react-i18next";

import axios from "axios";
import Swal from "sweetalert2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import fondo from "../../assets/img/fondo.jpg";
import fondo2 from "../../assets/img/fondo2.jpeg";
import fondo3 from "../../assets/img/fondo3.jfif";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function PkeBack() {
  const { name } = useContext(GlobalContext);
  const [pokemon, setPokemon] = useState({});
  const [Shini, setShini] = useState(0);
  const [mostrar, setMostrat] = useState(0);
  const { t } = useTranslation();
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {
      setPokemon(res.data);
    })
    .catch((err) => {
      Swal.fire(`${t("alert")}`, "", "error");
    });

  return (
    <div className="bg-dark text-white p-5">
      <NavBar />
      <br />
      <Grid container direction="row" justifyContent="space-between">
        <Card style={{ margin: 25 }} sx={{ maxWidth: 350, maxHeight: 500 }}>
          <CardMedia
            style={{ backgroundImage: `url(${fondo})` }}
            component="img"
            height="300px"
            image={
              pokemon.sprites
                ? mostrar === 0
                  ? Shini === 0
                    ? pokemon.sprites.front_default
                    : pokemon.sprites.front_shiny
                  : Shini === 0
                  ? pokemon.sprites.back_default
                  : pokemon.sprites.back_shiny
                : ""
            }
          />
          <CardContent style={{ backgroundImage: `url(${fondo2})` }}>
            <Typography gutterBottom variant="h5" component="div">
              #{pokemon.id}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {pokemon.name}
            </Typography>
          </CardContent>
          <CardActions
            style={{
              backgroundImage: `url(${fondo3})`,
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                if (Shini === 0) {
                  setShini(1);
                }
                if (Shini === 1) {
                  setShini(0);
                }
              }}
            >
              Shiny
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                if (mostrar === 0) {
                  setMostrat(1);
                }
                if (mostrar === 1) {
                  setMostrat(0);
                }
              }}
            >
              {t("side")}
            </Button>
          </CardActions>
        </Card>
        <Card
          style={{ margin: 25 }}
          sx={{ maxWidth: 450, maxHeight: 500, width: 450 }}
        >
          <CardContent>
            <Typography variant="h4">{t("Stat")}</Typography>
            <Typography>
              {t("HP")}: {pokemon.stats ? pokemon.stats[0].base_stat : ""}
              <BorderLinearProgress
                variant="determinate"
                value={pokemon.stats ? Number(pokemon.stats[0].base_stat) : 0}
              />
            </Typography>
            <Typography>
              {t("ATK")}: {pokemon.stats ? pokemon.stats[1].base_stat : ""}
              <BorderLinearProgress
                variant="determinate"
                value={pokemon.stats ? Number(pokemon.stats[1].base_stat) : 0}
              />
            </Typography>
            <Typography>
              {t("DEF")}: {pokemon.stats ? pokemon.stats[2].base_stat : ""}
              <BorderLinearProgress
                variant="determinate"
                value={pokemon.stats ? Number(pokemon.stats[2].base_stat) : 0}
              />
            </Typography>
            <Typography>
              {t("SPA")}: {pokemon.stats ? pokemon.stats[3].base_stat : ""}
              <BorderLinearProgress
                variant="determinate"
                value={pokemon.stats ? Number(pokemon.stats[3].base_stat) : 0}
              />
            </Typography>
            <Typography>
              {t("SPD")}: {pokemon.stats ? pokemon.stats[4].base_stat : ""}
              <BorderLinearProgress
                variant="determinate"
                value={pokemon.stats ? Number(pokemon.stats[4].base_stat) : 0}
              />
            </Typography>
            <Typography>
              {t("SPE")}: {pokemon.stats ? pokemon.stats[5].base_stat : ""}
              <BorderLinearProgress
                variant="determinate"
                value={pokemon.stats ? Number(pokemon.stats[5].base_stat) : 0}
              />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default PkeBack;
