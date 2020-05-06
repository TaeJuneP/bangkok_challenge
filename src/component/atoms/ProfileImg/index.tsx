import React from "react"
import styled from "styled-components"

type Props = {
    userImg: string
}

export default function ProfileImg(props: Props) {
    return (
        <Container src={props.userImg} />
    )
}

const Container = styled.img`
    border-radius:50%;
    border: 1px solid #dbdbdb;
    width:32px;
    height:32px;
`