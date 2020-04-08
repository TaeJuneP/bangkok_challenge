import React from "react"
import styled from "styled-components"

import like from "../../asset/icons/like.png"

export default function LikeButton() {
    return (
        <Img src={like} />
    )
}

const Img = styled.img`
    width:100%;
    height:100%;
`