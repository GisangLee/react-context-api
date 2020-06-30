import React from "react";
import Board from "./board";
import ContextProvider from "./contextProvider";

function App() {
  return (
    <ContextProvider>
      <Board />
    </ContextProvider>
  );
}

export default App;
