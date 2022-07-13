/* eslint-disable */
import React, { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import "./App.css";
import { GlobalContext } from "./context/context-global";

import NavBar from "./components/NavBar";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function App() {

  const { handleCount } = useContext(GlobalContext);

  const [pokemon, setPokeNum] = useState(0);
  const [pokedata, setPokeData] = useState("");
  const [pokedataesp, setPokeDataESP] = useState([]);
  const [Shini, setShini] = useState(0);
  const [mostrar, setMostrat] = useState(0);

  const getdata = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${pokemon}`)
      .then((res) => {
        setPokeData(res.data.results);
      });
  };

  useEffect(getdata, [pokemon]);

  useEffect(() => {
    setPokeDataESP([]);
    if (pokedata.length >= 1) {
      pokedata.map((item) => {
        axios.get(`${item.url}`).then((data) => {
          setPokeDataESP((current) => [...current, { data: data.data }]);
          if (pokedataesp >= 10) {
            return pokedataesp;
          }
        });
      });
    }
  }, [pokedata]);

  return (
    <div className="App bg-dark text-white p-5">
      <NavBar />
      <br />
      <Grid container direction="row" justifyContent="space-between">
        {pokedataesp.map((poke, index) => (
          <Card
            style={{ margin: 25 }}
            sx={{ maxWidth: 350, maxHeight: 450 }}
            key={index}
          >
            <CardMedia
              component="img"
              height="200px"
              image={
                mostrar == 0
                  ? Shini == 0
                    ? poke.data.sprites.front_default
                    : poke.data.sprites.front_shiny
                  : Shini == 0
                  ? poke.data.sprites.back_default
                  : poke.data.sprites.back_shiny
              }
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {poke.data.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {poke.data.id}
              </Typography>
            </CardContent>
            <CardActions>
              <Link className="btn btn-outline-success" to="/search" onClick={() => {
              handleCount((poke.data.id).toString());
            }}>
                View More
              </Link>
            </CardActions>
          </Card>
        ))}
      </Grid>
      <div className="text-center bg-secondary p-2">
        <Button
          variant="contained"
          onClick={() => {
            if (pokemon <= 0) {
              setPokeNum(Number(1116));
            } else {
              setPokeNum(Number(pokemon) - 10);
            }
          }}
        >
          Pagina Anterior
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            if (Shini == 0) {
              setShini(1);
            }
            if (Shini == 1) {
              setShini(0);
            }
          }}
        >
          Shiny
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            if (mostrar == 0) {
              setMostrat(1);
            }
            if (mostrar == 1) {
              setMostrat(0);
            }
          }}
        >
          Side
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            if (pokemon >= 1125) {
              setPokeNum(Number(0));
            } else {
              setPokeNum(Number(pokemon) + 10);
            }
          }}
        >
          Pagina Siguiente
        </Button>
      </div>
    </div>
  );
}

export default App;
