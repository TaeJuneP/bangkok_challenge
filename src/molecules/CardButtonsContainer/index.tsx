import React from "react"
import styled from "styled-components"

import Like from "../../atoms/LikeButton"

export default function CardButtonsContainer() {
    return (
        <Container>
            <ButtonContainer>
                <Like />
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
    height:40px;
    width:100%;
    padding:0 16px;
    align-items:center;
`

const ButtonContainer = styled.div`
    width:40px;
    height:40px;
    padding: 6px;
`