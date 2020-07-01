import React, { useState } from "react";
import { CreateContext } from "./createContext";

const ContextProvider = ({ children }) => {
  const increase = () => {
    setNumber((prevState) => {
      return {
        ...prevState,
        number: prevState.number + 1,
      };
    });
  };

  const decrease = () => {
    setNumber((prevState) => {
      return {
        ...prevState,
        number: prevState.number - 1,
      };
    });
  };
  const data = {
    number: 0,
    increase,
    decrease,
  };

  const [number, setNumber] = useState(data);

  console.log(children);
  return (
    <CreateContext.Provider value={number}>{children}</CreateContext.Provider>
  );
};

export default ContextProvider;
