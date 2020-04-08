import React from "react"
import styled from "styled-components"

import Logo from "../../../asset/icons/main_logo.png"

export default function MainLogo() {
    return (
        <LogoImg src={Logo} />
    )
}

const LogoImg = styled.img`
    transform: translateX(-50%);
    width: 100%;
    max-width: 500px;
    min-width: 300px;
    position: fixed;
    left: 50%;
    top: 20%;
`