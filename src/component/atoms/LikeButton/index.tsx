import React from "react"
import styled from "styled-components"

import like from "../../../asset/icons/like.png"

type Props = {
    putLike: () => void;
}

export default function LikeButton(props: Props) {
    return (
        <Container onClick={() => props.putLike()}>
            <Img src={like} />
        </Container>

    )
}

const Img = styled.img`
    width:100%;
    height:100%;
`
const Container = styled.div`
`