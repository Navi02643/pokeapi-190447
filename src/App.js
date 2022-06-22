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
    <div className="App p-5">
      <input
        className="btn btn-outline-success"
        type="button"
        value="Pagina Siguiente"
        onClick={(event) => {
          if(pokemon>=1126){
            setPokeNum(0);
          }else {
            setPokeNum(Number(pokemon) + 10);
            console.log(pokemon);
          }
        }}
      />
      <input
        className="btn btn-outline-success"
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
      <hr />
      <table className="table table-secondary table-striped">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Sprite Front</td>
            <td>Sprite Back</td>
            <td>Sprite Shini Front</td>
            <td>Sprite Shini Back</td>
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
    </div>
  );
}

export default App;
