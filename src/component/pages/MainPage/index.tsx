import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import Attachment from "../../atoms/AttachmentImgButton";
import Topbar from "../../organisms/Topbar";
import Card from "../../organisms/Card";
import PageButton from "../../atoms/PageChangeButton";
import Modal from "../../organisms/CreatePostModal";

import { device } from "../../../asset/mediaSize";
import {
  MODAL_ISVISIBLE,
  GET_NOTICE_REQUEST,
  GET_NOTICE_FAILURE,
  GET_MYNOTICE_REQUEST,
  GET_LIKENOTICE_REQUEST,
  CHECK_BKC_TOKEN,
} from "../../../modules/redux/actions/types";

import MyPageImg from "../../../asset/icons/action_user_info.png";
import Home from "../../../asset/icons/action_home.png";
import LikePostPage from "../../../asset/icons/like.png";
import PushHome from "../../../asset/icons/push_home.png";
import PushLike from "../../../asset/icons/push_like.png";
import PushUser from "../../../asset/icons/push_user.png";

const imgs = [
  [Home, PushHome],
  [MyPageImg, PushUser],
  [LikePostPage, PushLike],
];
export default function MainPage() {
  const [width, setWidth] = useState(window.innerWidth);
  const [page, setPage] = useState(0);
  const [imgArr, setImgArr] = useState({});
  const [tabStatus, setTabStatus] = useState(0);
  const loginInfo = useSelector((state: any) => state.login.loginInfo);
  const modalInfo = useSelector((state: any) => state.modal.status);
  const notices = useSelector((state: any) => state.notice.notice);
  const dispatch = useDispatch();

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  const closeModal = () => {
    setImgArr({});
    dispatch({ type: MODAL_ISVISIBLE, payload: false });
  };

  const changTabStatus = (tab: number) => {
    setTabStatus(tab);
    setPage(0);
    dispatch({ type: GET_NOTICE_FAILURE });
    if (tab === 0) {
      dispatch({ type: GET_NOTICE_REQUEST, token: loginInfo.token, page: 0 });
    } else if (tab === 1) {
      dispatch({ type: GET_MYNOTICE_REQUEST, token: loginInfo.token, page: 0 });
    } else if (tab === 2) {
      dispatch({
        type: GET_LIKENOTICE_REQUEST,
        token: loginInfo.token,
        page: 0,
      });
    }
  };

  useEffect(() => {
    if (Object.keys(imgArr).length > 0) {
      dispatch({ type: MODAL_ISVISIBLE, payload: true });
    }
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateWidthAndHeight);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateWidthAndHeight);
    };
  });

  useEffect(() => {
    if (loginInfo.login) {
      dispatch({ type: GET_NOTICE_REQUEST, token: loginInfo.token, page: 0 });
    } else {
      if (window.localStorage.getItem("bkc_token") !== null) {
        const data: any = window.localStorage.getItem("bkc_token");
        dispatch({
          type: CHECK_BKC_TOKEN,
          token: data,
        });
      } else {
        window.location.href = "/";
      }
    }
  }, [dispatch, loginInfo]);

  const handleScroll = (e: any) => {
    const scrollHeight = e.target.scrollHeight;
    const scrollTop = e.target.scrollTop;
    const clientHeight = e.target.clientHeight;
    const position = scrollHeight - scrollTop;
    if (position - 1 < clientHeight) {
      if (notices.page.totalPages - 1 > page) {
        let updatePage = page + 1;
        setPage(updatePage);
        if (tabStatus === 0) {
          dispatch({
            type: GET_NOTICE_REQUEST,
            token: loginInfo.token,
            page: updatePage,
          });
        } else if (tabStatus === 1) {
          dispatch({
            type: GET_MYNOTICE_REQUEST,
            token: loginInfo.token,
            page: updatePage,
          });
        } else if (tabStatus === 2) {
          dispatch({
            type: GET_LIKENOTICE_REQUEST,
            token: loginInfo.token,
            page: updatePage,
          });
        }
      }
    }
  };

  return (
    <Container onScroll={handleScroll}>
      {modalInfo ? (
        <Modal
          closeModal={closeModal}
          imgArr={imgArr}
          token={loginInfo.token}
        />
      ) : null}
      <Topbar userId={loginInfo.user.nickname} />
      <MainSession>
        <FixButton windWidth={(width - 975) / 2 + 20}>
          {imgs.map((item: any, i: number) => (
            <PageButton
              buttonImg={item}
              key={i}
              changTabStatus={changTabStatus}
              tabStatus={tabStatus}
              tab={i}
            />
          ))}
          <Attachment setImgArr={setImgArr} />
        </FixButton>
        {notices.data.map((notice: any, i: number) => (
          <Card notice={notice} key={i} loginInfo={loginInfo} />
        ))}
      </MainSession>
    </Container>
  );
}

const Container = styled.div`
  overflow-y: overlay;
  height: 100%;
  width: 100%;
`;

const MainSession = styled.section`
  display: block;
  max-width: 935px;
  margin: auto;
  padding-top: 74px;
  padding-bottom: 62px;
`;
const FixButton: React.ComponentType<any> = styled.div`
  @media ${device.desktop} {
    bottom: 0;
    top: auto;
    position: fixed;
    left: 50%;
    right: 0;
    transform: translateX(-50%);
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    min-width: 300px;
  }
  z-index: 2;
  display: flex;
  align-items: center;
  position: fixed;
  right: ${(props: any) => props.windWidth}px;
  top: 74px;
  height: 60px;
  width: 293px;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  background-color: #ffffff;
`;
