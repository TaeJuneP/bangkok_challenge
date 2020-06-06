import React, { useState } from "react";
import styled from "styled-components";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../../molecules/CardHeader";
import Img from "../../molecules/CardSlideImg";
import Buttons from "../../molecules/CardButtonsContainer";
import LikePoint from "../../molecules/CardLikePoint";
import Description from "../../molecules/CardDescription";
import Comment from "../../organisms/Comment";
import CommentOpen from "../../atoms/CommentOpenButton";
import Hashtag from "../../atoms/HashTagContents";

import {
  getCommentList,
  postComment,
  putLikeStatus,
} from "../../../modules/apis";
import { device } from "../../../asset/mediaSize";

type Props = {
  notice: any;
  loginInfo: any;
};

export default function Card(props: Props) {
  console.log(props.notice)
  const [commentList, setCommentList] = useState([]);
  const [commentVisible, setCommentVisible] = useState(false);
  const [like, setLike] = useState(props.notice.likeCount);
  const [likeStatue, setLikeStatus] = useState(props.notice.selfLike);
  const [commentCount, setCommentCount] = useState(props.notice.commentCount);
  const getCommentHandler = async () => {
    if (!commentVisible) {
      let data: any = await getCommentList(
        props.notice.id,
        props.loginInfo.token
      );
      setCommentList(data);
    }
  };

  const postCommentHandler = async (content: string) => {
    await postComment(props.notice.id, props.loginInfo.token, content);
    let data: any = await getCommentList(
      props.notice.id,
      props.loginInfo.token
    );
    setCommentCount(data.length);
    setCommentList(data);
  };

  const putLikeHandler = async () => {
    let data: any = await putLikeStatus(props.notice.id, props.loginInfo.token);
    setLike(data.data.likeCount);
    setLikeStatus(data.data.likeState);
  };
  return (
    <Container>
      <Header
        userId={props.notice.nickname}
        userImg={props.notice.profile_photo}
      />
      <Img img={props.notice.filePath} />
      <Buttons putLike={putLikeHandler} selfLike={likeStatue} />
      <LikePoint point={like} />
      <Hashtag hashtag={props.notice.hashTags} />
      <Description description={props.notice.article} />
      <CommentOpen
        getComment={getCommentHandler}
        commentVisible={commentVisible}
        setCommentVisible={setCommentVisible}
        commentCount={commentCount}
      />
      {commentVisible ? (
        <Comment
          commentList={commentList}
          postComment={postCommentHandler}
          setCommentVisible={setCommentVisible}
        />
      ) : null}
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
