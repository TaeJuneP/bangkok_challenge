import React from "react";
import styled from "styled-components";
import Item from "../../molecules/CommentItem";
import AddComment from "../../molecules/CardInputComment";
import { device } from "../../../asset/mediaSize";

type Props = {
  commentList: any;
  postComment: (content: string) => void;
};

export default function Comment(props: Props) {
  return (
    <Container>
      <Title>댓글</Title>
      <CommentList>
        {props.commentList.map((item: any) => (
          <Item
            key={item.id}
            nickname={item.nickname}
            profile_photo={item.profile_photo}
            article={item.content}
          />
        ))}
      </CommentList>
      <AddComment postComment={props.postComment} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  border-top: 1px solid #dbdbdb;
  position: relative;
  height: auto;
  z-index: 1;
  top: none;
  margin: 0;
  @media ${device.mobile} {
    position: fixed;
    z-index: 3;
    height: 100%;
    width: 100%;
    top: 0;
    background-color: #ffffff;
    margin: -1px;
  }
`;
const CommentList = styled.div`
  width: 100%;
  height: calc(100% - 112px);
  overflow-y: auto;
`;

const Title = styled.div`
  width: 100%;
  height: 56px;
  padding: 16px;
`;
