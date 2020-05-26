import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  postComment: (content: string) => void;
};

export default function CardInputComment(props: Props) {
  const [content, setContent] = useState("");

  return (
    <Container>
      <InputBox
        placeholder={"댓글 달기..."}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button
        content={content.length}
        onClick={
          content.length > 0
            ? () => {
                props.postComment(content);
                setContent("");
              }
            : undefined
        }
      >
        게시
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 0 16px;
  height: 56px;
  border-top: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
`;
const InputBox = styled.input`
  line-height: 18px;
  font-size: 14px;
  width: 100%;
  border: 0;
`;

const Button: React.ComponentType<any> = styled.div`
  height: 18px;
  width: 28px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 18px;
  color: #0095f6;
  cursor: ${(props: any) => (props.content > 0 ? "pointer" : "default")};
  opacity: ${(props: any) => (props.content > 0 ? 1 : 0.3)};
`;
