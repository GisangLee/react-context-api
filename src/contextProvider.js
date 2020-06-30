import React, { useState } from "react";
import { CreateContext } from "./createContext";
import useReducerWithSideEffects, {
  UpdateWithSideEffect,
} from "use-reducer-with-side-effects";

const ContextProvider = ({ children }) => {
  const jwtTokent = localStorage.getItem("jwtToken");
  console.log("jwtTokent: ", jwtTokent);

  const reducer = (prevState, action) => {
    const { type } = aciton;

    if (type === DELETE_TOKEN) {
      const newState = { ...prevState, jwtToken: "" };
      return UpdateWithSideEffect(newState, (state, dispatch) => {
        localStorage.setItem("jwtToken", "");
      });
    }
    return prevState;
  };

  const [store, dispatch] = useReducerWithSideEffects(reducer, {
    jwtTokent,
  });

  return (
    <CreateContext.Provider value={{ store, dispatch }}>
      {children}
    </CreateContext.Provider>
  );
};

const DELETE_TOKEN = "DEL_TOKEN";

export const delToken = () => ({ type: DELETE_TOKEN });

export default ContextProvider;
