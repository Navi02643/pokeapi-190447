import React, { createContext, useState } from "react";

const initialState = {
  name: "",
};
const initialId = {
  ID: 0,
};

export const GlobalContext = createContext(initialState);
export const GlobalIDPokemon = createContext(initialId);

export const GlobalProvider = ({ children }) => {
  const [name, SetName] = useState("");
  const [pokeid, SetID] = useState("");

  const handleCount = (type) => {
    type = type.toLowerCase();
    SetName(type);
  };

  const handleID = (item) => {
    SetID(item);
  };

  return (
    <GlobalContext.Provider value={{ name, pokeid, handleCount, handleID }}>
      {children}
    </GlobalContext.Provider>
  );
};
