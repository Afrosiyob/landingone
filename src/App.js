import React, { createContext, useReducer } from "react";

import Component from "./components/Component";

export const UserContext = createContext();
export const ChanelContext = createContext();

const initialState = {
  counterOne: 0,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "INCREMENT":
      return { ...state, counterOne: state.counterOne + payload };

    case "DECREMENT":
      return { ...state, counterOne: state.counterOne - payload };

    case "RESET":
      return { ...state, counterOne: 0 };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div
      style={{
        backgroundColor: "rgb(33,33,33)",
        width: "100%",
        height: "100vh",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <UserContext.Provider
        value={{ countState: state, countDispatch: dispatch }}
      >
        <Component />
      </UserContext.Provider>
    </div>
  );
}

export default App;
