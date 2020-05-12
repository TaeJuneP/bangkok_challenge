import React from "react"
import styled from "styled-components"

type Props = {
    hashtag: string
}

export default function HashTagContents(props: Props) {
    return (
        <Container>
            #{props.hashtag}
        </Container>
    )
}

const Container = styled.div`
    padding:0 16px;
    color: #00376b;
    font-size:14px;
    line-height:18px;
`