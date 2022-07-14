import React, { createContext, useState } from "react";

const initialState = {
  name: "",
};
const initialuser = {
  username: "",
};

export const GlobalContext = createContext(initialState);
export const GlobalIDPokemon = createContext(initialuser);

export const GlobalProvider = ({ children }) => {
  const [name, SetName] = useState("");
  const [initialuser, SetID] = useState("");

  const handleCount = (type) => {
    type = type.toLowerCase();
    SetName(type);
  };

  const handleUser = (item) => {
    SetID(item);
  };

  return (
    <GlobalContext.Provider value={{ name, initialuser, handleCount, handleUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
