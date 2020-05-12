import React from "react"
import styled from "styled-components"
import Item from "../../molecules/CommentItem";
import AddComment from "../../molecules/CardInputComment"
import { device } from "../../../asset/mediaSize";

type Props = {
    commentList: any;
    postComment: (content: string) => void;
}

export default function Comment(props: Props) {
    return (
        <Container>
            <Title>댓글</Title>
            <CommentList>
                {props.commentList.map((item: any) =>
                    <Item key={item.id} nickname={item.accountNickName} profile_photo={"http://k.kakaocdn.net/dn/jAifn/btqBpY1gzJl/XpCUZvd9kV19OCq9AsZ5J0/img_640x640.jpg"} article={item.content} />
                )}
            </CommentList >
            <AddComment postComment={props.postComment} />
        </Container>
    );
}

const Container = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    border-top: 1px solid #dbdbdb;
     @media ${device.desktop} {
        position:relative;
        height:auto;
  }
`
const CommentList = styled.div`
    width:100%;
    height:calc(100% - 56px);
    overflow-y:auto;
`

const Title = styled.div`
    width:100%;
    padding:16px;
`