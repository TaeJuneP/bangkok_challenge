import React from "react"
import styled from "styled-components"

import Img from "../../atoms/ProfileImg"
import Name from "../../atoms/BaseFontText"

type Props = {
    userId: string;
}

export default function CardHeader(props: Props) {
    return (
        <Container>
            <Img />
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
    border-bottom: 1px solid #dbdbdb;
`

const UserIdContainer = styled.div`
    margin-left:16px;
`