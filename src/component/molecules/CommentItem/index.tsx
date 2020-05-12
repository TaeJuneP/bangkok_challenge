import React from "react"
import styled from "styled-components"
import Header from "../CardHeader";


type Props = {
    nickname: string;
    profile_photo: string;
    article: string;
}

export default function CommentItem(props: Props) {
    return (
        <Container>
            <Header userId={props.nickname} userImg={props.profile_photo} />
            <CommentArticle >
                {props.article}
            </CommentArticle>
            
        </Container>
    )
}

const Container = styled.div`
    width:100%;
`
const CommentArticle = styled.div`
    width:100%;
    padding:0 16px 16px 64px;
    font-size:14px;
    line-height:18px;
`