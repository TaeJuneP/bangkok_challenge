import React from "react"
import styled from "styled-components"

import Logo from "../../atoms/MainLogo"
import Login from "../../atoms/KakaoLoginButton"

export default function LoginPage() {
    return (
        <Container>
            <Logo />
            <Login />
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height:100%;
`