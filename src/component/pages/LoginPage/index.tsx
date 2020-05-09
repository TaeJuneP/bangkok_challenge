import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components"

import { LOGIN_REQUEST } from "../../../modules/redux/actions/types";
import Logo from "../../atoms/MainLogo"
import Login from "../../atoms/KakaoLoginButton"

export default function LoginPage(props: RouteComponentProps) {
    const dispatch = useDispatch();
    const loginInfo = useSelector((state: any) => state.login.loginInfo);
    console.log(loginInfo)
    const clickLoginButton = (token: any) => {
        dispatch({ type: LOGIN_REQUEST, token });
    };

    useEffect(() => {
        if (loginInfo.login) {
            props.history.push(`/main`);
        }
    }, [loginInfo])

    return (
        <Container>
            <Logo />
            <Login clickLoginButton={clickLoginButton} />
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height:100%;
`