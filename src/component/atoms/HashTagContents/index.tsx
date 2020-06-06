import React from "react";
import styled from "styled-components";

type Props = {
  hashtag: any;
};

export default function HashTagContents(props: Props) {
  console.log(props.hashtag)
  return (
    <Container>
      {props.hashtag.map((item: any) => {
        return item.content + " ";
      })}
    </Container>
  );
}

const Container = styled.div`
  padding: 0 16px;
  color: #00376b;
  font-size: 14px;
  line-height: 18px;
`;
