import React from "react"
import styled from "styled-components"
import Input from "../../atoms/CommentInputBox"

export default function CardInputComment() {
    return (
        <Container>
            <Input />
            <Button>게시</Button>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    padding:0 16px;
    height:56px;
    border-top: 1px solid #dbdbdb;
    display:flex;
    align-items:center;
`

const Button = styled.button`
    height:18px;
    width:28px;
    background-color:#ffffff;
    font-size:14px;
    line-height:18px;
    color: #0095f6;
    opacity:0.3;
`