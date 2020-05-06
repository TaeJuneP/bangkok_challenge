import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../../molecules/CardHeader";
import Img from "../../molecules/CardSlideImg";
import Buttons from "../../molecules/CardButtonsContainer";
import LikePoint from "../../molecules/CardLikePoint";
import Description from "../../molecules/CardDescription";
import Comment from "../../molecules/CardInputComment";

import { device } from "../../../asset/mediaSize";

import img from "../../../asset/icons/logo.png";

const data: any = ["Taejune", "2020.04.08", [img, img], 30, "내용을 적자~~!!"];

type Props = {
  notice: any
}

export default function Card(props: Props) {
  return (
    <Container>
      <Header userId={props.notice.nickname} userImg={props.notice.profile_photo} />
      <Img img={props.notice.filePath} />
      <Buttons />
      <LikePoint point={props.notice.likeCount} />
      <Description description={props.notice.article} />
      <Comment />
    </Container>
  );
}

const Container = styled.div`
  max-width: 600px;
  min-width: 320px;
  margin-bottom: 60px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  width: 100%;
  @media ${device.desktop} {
    margin: 0 auto 15px auto;
  }
`;
