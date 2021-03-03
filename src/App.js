import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import { device } from "./style/device/device";

function App() {
  const App = styled.div`
    background: linear-gradient(
      30deg,
      rgb(244, 145, 172),
      #ebf8e1,
      rgb(255, 202, 157)
    );
    transition: all 0.2s linear;
    padding: 15px;
    @media ${device.tablet} {
      padding: 15px 30px;
    }
    @media ${device.laptop} {
      padding: 30px 70px;
    }
  `;

  return (
    <App>
      <Navbar />
      <Header />
    </App>
  );
}

export default App;
