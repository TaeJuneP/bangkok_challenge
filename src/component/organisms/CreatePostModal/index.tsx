import React from "react";
import styled from "styled-components";

import Dimmer from "../../atoms/Dimmer";
import Close from "../../atoms/CloseButton";
import ImgList from "../../molecules/AddedImgList";
import Complete from "../../atoms/CompleteButton";

import { device } from "../../../asset/mediaSize";

type Props = {
  closeModal: () => void;
  imgArr: any;
};

export default function CreatePostModal(props: Props) {
  return (
    <>
      <Dimmer event={props.closeModal} />
      <Container>
        <Header>
          <HeaderName>작성하기</HeaderName>
          <Close event={props.closeModal} />
        </Header>
        <ImgList imgArr={props.imgArr} />
        <TextArea placeholder="설명 입력..." />
        <ButtonContainer>
          <Complete />
        </ButtonContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  @media ${device.tablet} {
    height: 100%;
    width: 100%;
    top: 0;
  }
  height: 600px;
  width: 500px;
  position: fixed;
  z-index: 4;
  left: 50%;
  top: calc(50% - 350px);
  transform: translateX(-50%);
  background-color: #ffffff;
`;

const Header = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const TextArea = styled.textarea`
  @media ${device.tablet} {
    height: 30%;
  }
  width: 100%;
  height: 300px;
  resize: none;
  border: 0;
  padding: 10px;
  font-size: 16px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

const ButtonContainer = styled.div`
  width: 160px;
  height: 60px;
  margin: 30px auto;
`;

const HeaderName = styled.div``;
