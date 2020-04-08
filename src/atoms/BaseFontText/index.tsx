import React from "react"
import styled from "styled-components"

type Props = {
    text: string
}

export default function BaseFontText(props: Props) {
    return (
        <TextContainer>
            {props.text}
        </TextContainer>
    )
}

const TextContainer = styled.div`
    font-size:14px;
    font-weight:bold;
`