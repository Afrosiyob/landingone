import styled from "styled-components";
import { device } from "../../device/device";

export const ParentBox = styled.div`
    width:100%;
    height:100vh;
    display: flex;
    padding:10px;
    box-sizing: border-box;
`

export const WrapBox = styled.div`
    /* background-color:cyan; */
    /* padding:10px; */
    padding-left:10px;
    box-sizing: border-box;
    height:100vh;
    width:100%;
    display:grid;
    grid-gap:20px;
    grid-template-areas:
        'header header header header header header'
        'menu menu body body body side'
        'menu menu footer footer footer footer';

        @media ${ device.laptop } {
            grid-template-areas:
        'header header header header header header'
        'menu menu body body body body'
        'menu menu side side side side'
        'menu menu footer footer footer footer';
        }
        
        @media ${ device.tablet } {
            grid-template-areas:
        'header header header header header header'
        'menu menu menu menu menu menu'
        'body body body body body body'
        'side side side side side side'
        'footer footer footer footer footer footer';
        }
`

export const Header = styled.div`
    background-color: green;
    grid-area: header;
`
export const Menu = styled.div`
    background-color: red;
    grid-area: menu;
`

export const Body = styled.div`
    background-color: red;
    grid-area: body;
`
export const Side = styled.div`
    background-color: red;
    grid-area: side;
`

export const Footer = styled.div`
    background-color: red;
    grid-area: footer;
`


export const LeftSideBar = styled.div`
    width: ${ props => props.sideBar ? "0" : "300px" };
    height: 100vh;
    transition: all 0.2s linear;
    background-color: blue;
    overflow: hidden;
`