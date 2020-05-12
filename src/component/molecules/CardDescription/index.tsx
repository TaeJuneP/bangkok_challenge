import React from "react"
import styled from "styled-components"

type Props = {
    description: string
}

export default function CardDescription(props: Props) {
    return (
        <Container>
            <DescriptionContainer>
                {props.description}
            </DescriptionContainer>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    padding:0 16px;
    margin-bottom:10px;
`

const DescriptionContainer = styled.span`
    font-size:14px;
    line-height:18px;
    /* display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    word-break: break-all; */
`