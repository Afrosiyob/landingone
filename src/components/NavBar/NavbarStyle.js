import styled from "styled-components";
import { device } from "../../style/device/device";

export const Navbar = styled.div`
  width: 100%;
  /* background-color: green; */
  display: flex;
  justify-content: center;
  transition: all 0.2s linear;
  @media ${device.tablet} {
    justify-content: space-between;
  }
`;

export const LeftItem = styled.div`
  /* background-color: red; */
`;
export const RightItem = styled.div`
  /* background-color: orange; */
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const Li = styled.li`
  padding: 0 10px;
  transition: all 0.2s linear;
  @media ${device.tablet} {
    padding: 0 15px;
  }
`;
