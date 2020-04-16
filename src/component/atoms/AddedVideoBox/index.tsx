import React from "react";
import styled from "styled-components";

type Props = {
  video: any;
};

export default function AddedVideoBox(props: Props) {
  return (
    <Container>
      <source src={URL.createObjectURL(props.video)} id="video_here" />
    </Container>
  );
}

const Container = styled.video`
  height: 100px;
  width: 100px;
  min-width: 100px;
  max-height: 100px;
  border-right: 1px solid gray;
`;
