/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [pokemon, setPokeNum] = useState(0);
  const [pokedata, setPokeData] = useState("");
  const [pokedataesp, setPokeDataESP] = useState([]);
  const [Shini, setShini] = useState(0);
  const [mostrar, setMostrat] = useState(0);

RegExp: ''

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
      <table className="table table-danger table-striped">
        <thead>
          <tr>
            <td className="bg-danger">Number In The Pokedex</td>
            <td className="bg-danger">Name</td>
            <td className="bg-danger">Pokemon Image</td>
          </tr>
        </thead>
        <tbody>
          {pokedataesp.map((poke, index) => (
            <tr key={index}>
              <td>{`${poke.data.id}`}</td>
              <td>{`${poke.data.name}`}</td>
              <td>
                <img
                  src={
                    mostrar == 0
                      ? Shini == 0
                        ? poke.data.sprites.front_default
                        : poke.data.sprites.front_shiny
                      : Shini == 0
                      ? poke.data.sprites.back_default
                      : poke.data.sprites.back_shiny
                  }
                  alt="No image"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center bg-secondary p-2">
        <input
          className="btn btn-warning"
          type="button"
          value="Pagina Siguiente"
          onClick={(event) => {
            if (pokemon >= 1125) {
              setPokeNum(Number(0));
            } else {
              setPokeNum(Number(pokemon) + 10);
            }
          }}
        />
        <input
          type="button"
          value="Shiny"
          className="btn btn-warning ms-3"
          onClick={() => {
            if (Shini == 0) {
              setShini(1);
            }
            if (Shini == 1) {
              setShini(0);
            }
          }}
        />
        <input
          type="button"
          value="Side"
          className="btn btn-warning ms-3"
          onClick={() => {
            if (mostrar == 0) {
              setMostrat(1);
            }
            if (mostrar == 1) {
              setMostrat(0);
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
