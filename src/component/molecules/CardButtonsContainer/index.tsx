import React from "react"
import styled from "styled-components"

import Like from "../../atoms/LikeButton"

type Props = {
    putLike: () => void;
}

export default function CardButtonsContainer(props: Props) {
    return (
        <Container>
            <ButtonContainer>
                <Like putLike={props.putLike} />
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