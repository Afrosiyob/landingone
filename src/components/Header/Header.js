import React from "react";
import styled from "styled-components";
import { device } from "../../style/device/device";

const Header = () => {
  const Header = styled.div`
    width: 100%;
    background-color: yellow;
    margin-top: 30px;
    transition: all 0.2s linear;
    @media ${device.tablet} {
      margin-top: 50px;
    }
  `;

  return <Header>this is header</Header>;
};

export default Header;
