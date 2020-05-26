import React from "react";
import styled from "styled-components";

type Props = {
  buttonImg: any;
};

export default function PageChangeButton(props: Props) {
  return (
    <Container>
      <Img src={props.buttonImg} />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #dbdbdb;
  cursor: pointer;
`;

const Img = styled.img`
  width: 35px;
  position: absolute;
`;
