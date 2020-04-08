import React from "react"
import styled from "styled-components"

type Props = {
    img: any
}

export default function CardSlideImg(props: Props) {
    return (
        <Img src={props.img} />
    )
}

const Img = styled.img`
    width:100%;
`