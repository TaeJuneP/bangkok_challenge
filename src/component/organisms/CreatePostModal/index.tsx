import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { POST_NOTICE_REQUEST } from "../../../modules/redux/actions/types";

import styled from "styled-components";

import Dimmer from "../../atoms/Dimmer";
import Close from "../../atoms/CloseButton";
import ImgList from "../../molecules/AddedImgList";
import Complete from "../../atoms/CompleteButton";

import { device } from "../../../asset/mediaSize";

type Props = {
  closeModal: () => void;
  imgArr: any;
  token: string;
};

export default function CreatePostModal(props: Props) {
  const [description, setDescription] = useState("");
  const [hashtag, setHashtag] = useState("");
  const dispatch = useDispatch();

  const changeDescriptionValue = (e: any) => {
    setDescription(e.target.value);
  }

  const changeHashtagValue = (e: any) => {
    setHashtag(e.target.value)
  }

  const createFormdata = () => {
    const formData = new FormData();
    formData.append('file', props.imgArr[0]);
    formData.append("article", description);
    formData.append("hashtag", hashtag);
    dispatch({ type: POST_NOTICE_REQUEST, token: props.token, data: formData })
  }

  return (
    <>
      <Dimmer event={props.closeModal} />
      <Container>
        <Header>
          <HeaderName>작성하기</HeaderName>
          <Close event={props.closeModal} />
        </Header>
        <ImgList imgArr={props.imgArr} />
        <TextArea placeholder="설명 입력..." value={description} onChange={(e: any) => { changeDescriptionValue(e) }} />
        <HashTagInput placeholder="#hashtag" value={hashtag} onChange={(e: any) => { changeHashtagValue(e) }} />
        <ButtonContainer>
          <Complete createFormdata={createFormdata} />
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

const HashTagInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 0;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  color: blue;
`

const ButtonContainer = styled.div`
  width: 160px;
  height: 60px;
  margin: 30px auto;
`;

const HeaderName = styled.div``;
