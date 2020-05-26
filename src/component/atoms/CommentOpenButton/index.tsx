import React from "react";
import styled from "styled-components";

type Props = {
  getComment: () => void;
  setCommentVisible: (commentVisible: boolean) => void;
  commentVisible: boolean;
  commentCount: number;
};

export default function CommentOpenButton(props: Props) {
  return (
    <Container
      onClick={() => {
        props.getComment();
        props.setCommentVisible(!props.commentVisible);
      }}
    >
      {!props.commentVisible ? "댓글 보기 " : "댓글 닫기 "}
      {props.commentCount}개
    </Container>
  );
}

const Container = styled.div`
  width: 90px;
  color: #606060;
  font-weight: 500;
  margin: 0 16px 16px 16px;
  font-size: 14px;
  cursor: pointer;
`;
