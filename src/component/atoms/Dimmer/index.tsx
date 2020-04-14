import React from "react"
import styled from "styled-components"

type Props = {
    event: () => void;
}

export default function Dimmer(props: Props) {
    return (
        <Container onClick={props.event} />
    )
}

const Container = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    opacity: 0.5;
    background-color: black;
    z-index:3;
`