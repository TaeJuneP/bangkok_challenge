import React from "react"
import styled from "styled-components"

type Props = {
    createFormdata: () => void
}

export default function CompleteButton(props: Props) {
    return (
        <Button onClick={props.createFormdata}>완료</Button>
    )
}

const Button = styled.button`
    height:100%;
    width:100%;
    border-radius:5px;
`