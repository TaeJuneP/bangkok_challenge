import React from "react"
import styled from "styled-components"

export default function CommentInputBox() {
    return (
        <InputBox placeholder={"댓글 달기..."} />
    )
}

const InputBox = styled.input`
    line-height:18px;
    font-size:14px;
    width:100%;
    border:0;
`