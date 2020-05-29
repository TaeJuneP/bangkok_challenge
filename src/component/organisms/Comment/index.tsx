import React from "react";
import styled from "styled-components";

import CloseButton from "../../atoms/CloseButton";
import Item from "../../molecules/CommentItem";
import AddComment from "../../molecules/CardInputComment";
import { device } from "../../../asset/mediaSize";

type Props = {
  commentList: any;
  postComment: (content: string) => void;
  setCommentVisible: (commentVisible: boolean) => void;
};

export default function Comment(props: Props) {
  const closeComment = () => {
    props.setCommentVisible(false);
  };

  return (
    <Container>
      <Header>
        <Close>
          <CloseButton event={closeComment} />
        </Close>
        <Title>댓글</Title>
      </Header>
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

const Close = styled.div`
  display: none;
  padding: 11px;
  @media ${device.mobile} {
    display: block;
  }
`;

const Header = styled.div`
  display: flex;
`;
