import React, { createContext } from "react";
import Component from "./components/Component";

export const UserContext = createContext();
export const ChanelContext = createContext();

function App() {
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
      <UserContext.Provider value="Afrosiyob">
        <ChanelContext.Provider value="KOKO">
          <Component />
        </ChanelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
