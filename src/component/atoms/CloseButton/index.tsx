import React from "react"
import styled from "styled-components"

type Props = {
    event: () => void;
}

export default function CloseButton(props: Props) {
    return (
        <>
            <Button onClick={props.event}>X</Button>
        </>
    )
}

const Button = styled.button`
    height:100%;
    padding: 5px;
    background-color: #ffffff;
`