import React from "react"
import styled from "styled-components"

import Text from "../../atoms/BaseFontText"

type Props = {
    point: number
}

export default function CardLikePoint(props: Props) {
    return (
        <Container>
            <Text text={`좋아요`} />
            <Blank />
            <Text text={String(props.point)} />
            <Text text={"개"} />
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    margin-bottom: 8px;
    padding:0 16px; 
    height:18px;
    display:flex;
`

const Blank = styled.div`
    width:5px;
`