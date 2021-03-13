import React from 'react'
import { Body, Footer, Header, Menu, Side, WrapBox } from './style'

function LayoutOne () {
    return (
        <WrapBox>
            <Header>this is header</Header>
            <Menu>this is menu</Menu>
            <Body> this is body </Body>
            <Side> this is side  </Side>
            <Footer> this is footer </Footer>
        </WrapBox>
    )
}

export default LayoutOne
