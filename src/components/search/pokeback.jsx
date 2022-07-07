import React, { useContext } from "react";
import NavBar from "../NavBar";
import { GlobalContext } from "../../context/context-global"

function PkeBack() {
  const { name } = useContext(GlobalContext)
  return (
    <div className="bg-dark text-white p-5">
      <NavBar/>
      <br/>
      <h5>{name}</h5>
    </div>
  );
}

export default PkeBack;
