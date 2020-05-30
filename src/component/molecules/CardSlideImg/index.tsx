import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  img: any;
};

const arr = [0, 1];
export default function CardSlideImg(props: Props) {
  const [slide, setSlide] = useState(0);
  const [startPosition, setStartPostion] = useState(0);

  const dragStart = (e: any) => {
    setStartPostion(e.pageX);
  };
  const dragEnd = (e: any) => {
    if (startPosition > e.pageX ) {
      setSlide(slide - 1);
    } else if (startPosition < e.pageX && slide !== 0) {
      setSlide(slide + 1);
    }
  };
  return (
    <Container>
      <Button
        onClick={() => setSlide(slide - 1)}
        slide={slide}
        end={arr.length}
      >
        &#60;
      </Button>
      {arr.map((item) => (
        <Img
          src={props.img}
          key={item}
          slide={slide}
          draggable={false}
          onMouseDown={dragStart}
          onMouseUp={dragEnd}
        />
      ))}
      <Button1 onClick={() => setSlide(slide + 1)} slide={slide}>
        &#62;
      </Button1>
    </Container>
  );
}

const Button: React.ComponentType<any> = styled.div`
  position: absolute;
  color: #ffffff;
  height: 30px;
  width: 20px;
  z-index: 2;
  font-size: 20px;
  display: ${(props: any) =>
    -props.slide === props.end - 1 ? "none" : "block"};
  opacity: 0.7;
  cursor: pointer;
`;

const Button1: React.ComponentType<any> = styled.div`
  position: absolute;
  color: #ffffff;
  height: 30px;
  width: 20px;
  font-size: 20px;
  right: 0;
  display: ${(props: any) => (props.slide === 0 ? "none" : "block")};
  opacity: 0.7;
  cursor: pointer;
`;

const Img: React.ComponentType<any> = styled.img`
  width: 100%;
  height: 100%;
  transition: all ease 1s;
  transform: translateX(${(props: any) => props.slide * 100 + "%"});
`;
const Container = styled.div`
  width: 100%;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  position: relative;
  align-items: center;
  overflow-x: hidden;
`;
