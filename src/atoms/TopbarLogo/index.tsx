import React from "react"
import styled from "styled-components"

import logo from "../../asset/icons/logo.png"

export default function TopbarLogo() {
    return (
        <Container>
            <Img src={logo} />
            BangKok_Challenge
        </Container>
    )
}

const Img = styled.img`
    height:50px;
    margin-right: 10px;
`

const Container = styled.div`
    align-items:center;
    display:flex;
    font-weight:bold;
`