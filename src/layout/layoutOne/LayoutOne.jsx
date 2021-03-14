import React, { useState } from 'react'
import { Body, Footer, Header, LeftSideBar, Menu, ParentBox, Side, WrapBox } from './style'

function LayoutOne () {

    const [ state, setState ] = useState( {
        sideBar: true
    } )


    const openSideBar = () => {
        setState( { ...state, sideBar: !state.sideBar } )
        console.log( state.sideBar );
    }

    return (
        <ParentBox>
            <LeftSideBar sideBar={ state.sideBar }>
                hi
            </LeftSideBar>
            <WrapBox>
                <Header>this is header   <button onClick={ () => openSideBar() }>
                    toggle btn
                </button></Header>
                <Menu>this is menu</Menu>
                <Body> this is body </Body>
                <Side> this is side  </Side>
                <Footer> this is footer </Footer>
            </WrapBox>
        </ParentBox>
    )
}

export default LayoutOne
