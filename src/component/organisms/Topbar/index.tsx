import React from "react"
import styled from "styled-components"

import Logo from "../../atoms/TopbarLogo"
import User from "../../molecules/TopbarUserInfo"

type Props = {
    userId: string;
    userPoint: string
}

export default function Topbar(props: Props) {
    return (
        <Container>
            <TopbarContainer>
                <Logo />
                <User userId={props.userId} userPoint={props.userPoint} />
            </TopbarContainer>
        </Container>
    )
}

const TopbarContainer = styled.div`
    width:100%;
    max-width:975px;
    display:flex;
    margin:auto;
    padding : 0 20px;
    align-items: center;
    justify-content:space-between;
`

const Container = styled.div`
    width:100%;
    border-bottom: 1px solid #dbdbdb;
    background-color:#ffffff;
    position: fixed;
    height:54px;
    top:0;
    z-index: 2;
`