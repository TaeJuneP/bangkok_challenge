import React from "react";
import styled from "styled-components";

import Img from "../../../asset/icons/back_btn.png";

type Props = {
  event: () => void;
};

export default function CloseButton(props: Props) {
  return (
    <Container>
      <Button onClick={props.event}>X</Button>
      <BackImg src={Img} />
    </Container>
  );
}

const Button = styled.button`
  position: absolute;
  z-index: 2;
  opacity: 0;
  width: 20px;
`;

const BackImg = styled.img`
  width: 20px;
  position: absolute;
`;

const Container = styled.div`
  height: 100%;
  padding: 5px;
  width: 20px;
  display: flex;
  align-items: center;
`;
