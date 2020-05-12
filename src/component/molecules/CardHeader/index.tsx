import React from "react"
import styled from "styled-components"

import Img from "../../atoms/ProfileImg"
import Name from "../../atoms/BaseFontText"

type Props = {
    userId: string;
    userImg: string;
}

export default function CardHeader(props: Props) {
    return (
        <Container>
            <Img userImg={props.userImg} />
            <UserIdContainer>
                <Name text={props.userId} />
            </UserIdContainer>
        </Container>
    )
}

const Container = styled.div`
    height:60px;
    width:100%;
    display:flex;
    padding: 16px;
    align-items:center;
`

const UserIdContainer = styled.div`
    margin-left:16px;
`