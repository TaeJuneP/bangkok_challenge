import React from "react";
import KakaoLogin from "react-kakao-login";
import styled from "styled-components";

import Img from "../../../asset/icons/kakaologin.png";

const API_KEY = process.env.REACT_APP_KAKAO_JS_KEY;

type Props = {
  clickLoginButton: (token: any) => void
}

export default function KakaoLoginButton(props: Props) {
  const reponsekakao = (res: any) => {
    props.clickLoginButton(res.response.access_token)
  };
  const responseFail = () => {
    console.log("Error");
  };

  return (
    <Container>
      <LoginButton
        jsKey={String(API_KEY)}
        buttonText="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;카카오계정으로 로그인"
        onSuccess={reponsekakao}
        onFailure={responseFail}
        getProfile={false}
      />
      <KakaoImg src={Img} />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  margin: auto;
  height: 50px;
  width: 300px;
  bottom: 20%;
  left: calc(50% - 150px);
`;

const LoginButton = styled(KakaoLogin)`
  width: 100%;
  height: 100%;
  line-height: 44px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  outline: 0;
  border-radius: 24px;
  color: #3c1e1e;
  background-color: #ffeb00;
`;

const KakaoImg = styled.img`
  height: 50px;
  z-index: 2;
  position: absolute;
  left: 20px;
`;
