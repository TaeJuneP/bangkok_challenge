import React from "react"
import styled from "styled-components"

type Props = {
    img: any
}

export default function AddedImgBox(props: Props) {
    return (
        <Container>
            <Img src={props.img} />
        </Container>
    )
}

const Container = styled.div`
    height:100px;
    width:100px;
    min-width:100px;
    border-right:1px solid gray;
`
const Img = styled.img`
    height:100%;
    width:100%;
`
