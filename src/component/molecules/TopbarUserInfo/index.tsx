import React from "react"
import styled from "styled-components"
import Text from "../../atoms/BaseFontText"

type Props = {
    userId: string;
    userPoint: string;
}

export default function TopbarUserInfo(props: Props) {
    return (
        <Container>
            <Text text={props.userId} />
            <Blank />
            {/* <Text text={props.userPoint} /> */}
        </Container>
    )
}

const Container = styled.div`
    display:flex;
`

const Blank = styled.div`
    width:5px;
`