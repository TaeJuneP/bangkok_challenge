import React from "react"
import styled from "styled-components"

type Props = {
    getComment: () => void;
    setCommentVisible: (commentVisible: boolean) => void;
    commentVisible: boolean;
}

export default function CommentOpenButton(props: Props) {
    return (
        <Container onClick={() => {
            props.getComment();
            props.setCommentVisible(!props.commentVisible)
        }}>
            {!props.commentVisible ? "댓글 보기" : "댓글 닫기"}
        </Container>
    )
}

const Container = styled.div`
    width: 70px;
    color: #606060;
    font-weight: 500;
    margin: 0 16px 16px 16px;
    font-size: 14px;
    cursor: pointer;
`