import styled from "styled-components";
import { device } from "../../device/device";



export const WrapBox = styled.div`
    /* background-color:cyan; */
    padding:10px;
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