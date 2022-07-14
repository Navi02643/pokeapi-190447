import React, { useContext, useState } from "react";
import NavBar from "../navbar/NavBar";
import { GlobalContext } from "../../context/context-global";
import axios from "axios";
import Swal from "sweetalert2";

function PkeBack() {
  const { name } = useContext(GlobalContext);
  const [pokemon, setPokemon] = useState([{}]);
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {
      setPokemon(res.data);
    })
    .catch(err=>{
      Swal.fire(
        'Good job!',
        'Este pokemon no existe',
        'error'
      )
    });

  return (
    <div className="bg-dark text-white p-5">
      <NavBar />
      <br />
      <h5>{(pokemon.name)}</h5>
    </div>
  );
}

export default PkeBack;
