import React from "react";
import styled from "styled-components";

import ImgBox from "../../atoms/AddedImgBox";
import VideoBox from "../../atoms/AddedVideoBox";

type Props = {
  imgArr: any;
};

export default function AddedImgList(props: Props) {
  console.log(props.imgArr);

  return (
    <ScrollContainer>
      <Container>
        {Object.keys(props.imgArr).map((item: any, i: number) =>
          props.imgArr[item].type.split("/")[0] === "image" ? (
            <ImgBox img={props.imgArr[item]} key={item} />
          ) : (
            <VideoBox key={item} video={props.imgArr[item]} />
          )
        )}
      </Container>
    </ScrollContainer>
  );
}

const Container = styled.div`
  width: 100%;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
`;

const ScrollContainer = styled.div`
  width: 100%;
  height: 120px;
`;
