import React from "react";
import styled from "styled-components";
import CreateImg from "../../../asset/icons/create_post.png";

type Props = {
  setImgArr: (imgArr: []) => void;
};

export default function AttachmentImgButtton(props: Props) {
  const handleFileInput = async (e: any) => {
    props.setImgArr(e.target.files);
  };

  const inputValueReset = (e: any) => {
    e.target.value = null;
  };

  return (
    <Container>
      <InputButton
        type="file"
        accept="image/* ,video/*"
        multiple
        name="file"
        onChange={(e) => handleFileInput(e)}
        onClick={(e) => inputValueReset(e)}
      />
      <Img src={CreateImg} />
    </Container>
  );
}

const InputButton = styled.input`
  font-size: 18px;
  font-weight: bold;
  width: 25%;
  text-align: center;
  border-left: 1px solid #dbdbdb;
  height: 100%;
  opacity: 0;
  position: absolute;
  z-index: 2;
`;

const Container = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 35px;
  position: absolute;
`;
