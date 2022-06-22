/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [pokemon, setPokeNum] = useState(0);
  const [pokedata, setPokeData] = useState("");
  const [pokedataesp, setPokeDataESP] = useState([]);

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
      <div className="text-center">
        <h1>POKEAPI - 190447</h1>
      </div>
      <hr/>
      <table className="table table-danger table-striped">
        <thead>
          <tr>
            <td className="bg-danger">Number In The Pokedex</td>
            <td className="bg-danger">Name</td>
            <td className="bg-danger">Sprite Front</td>
            <td className="bg-danger">Sprite Back</td>
            <td className="bg-danger">Sprite Shini Front</td>
            <td className="bg-danger">Sprite Shini Back</td>
          </tr>
        </thead>
        <tbody>
          {pokedataesp.map((poke, index) => (
            <tr key={index}>
              <td>{`${poke.data.id}`}</td>
              <td>{`${poke.data.name}`}</td>
              <td>
                <img src={poke.data.sprites.front_default}></img>
              </td>
              <td>
                <img src={poke.data.sprites.back_default}></img>
              </td>
              <td>
                <img src={poke.data.sprites.front_shiny}></img>
              </td>
              <td>
                <img src={poke.data.sprites.back_shiny}></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-secondary p-2">
        <input
          className="btn btn-warning me-3"
          type="button"
          value="Pagina Siguiente"
          onClick={(event) => {
            if (pokemon >= 1125) {
              setPokeNum(Number(0));
            } else {
              setPokeNum(Number(pokemon) + 10);
              console.log(pokemon);
            }
          }}
        />
        <input
          className="btn btn-warning ms-3"
          type="button"
          value="Pagina Anterior"
          onClick={(event) => {
            if (pokemon <= 0) {
              setPokeNum(Number(1116));
            } else {
              setPokeNum(Number(pokemon) - 10);
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
