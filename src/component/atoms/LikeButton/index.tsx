import React from "react";
import styled from "styled-components";

import unLike from "../../../asset/icons/like.png";
import like from "../../../asset/icons/like_pressed.png";

type Props = {
  putLike: () => void;
  selfLike: boolean;
};

export default function LikeButton(props: Props) {
  return (
    <Container onClick={() => props.putLike()}>
      <Img src={props.selfLike ? like : unLike} />
    </Container>
  );
}

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Container = styled.div``;
