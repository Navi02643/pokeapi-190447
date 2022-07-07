import React, { createContext, useState } from "react";

const initialState = {
  name: "",
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [name,SetName] = useState("")
  const handleCount = (type) => {
    type = type.toLowerCase()
    SetName(type)
  };

  return (
    <GlobalContext.Provider value={{ name,handleCount }}>
      {children}
    </GlobalContext.Provider>
  );
};
