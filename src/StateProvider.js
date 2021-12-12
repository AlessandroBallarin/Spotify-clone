//Setup del Data Layer usando react context API

import React, { createContext, useContext, useReducer } from "react";

//Creao il Data Layer
export const StateContext = createContext();

//Creo il Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Funzione con cui lo si usa il Data Layer dentro un componente
export const useStateValue = () => useContext(StateContext);
