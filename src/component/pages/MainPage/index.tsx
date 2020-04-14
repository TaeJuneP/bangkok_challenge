import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components"

import Attachment from "../../atoms/AttachmentImgButton"
import Topbar from "../../organisms/Topbar"
import Card from "../../organisms/Card"
import Modal from "../../organisms/CreatePostModal"

import { device } from "../../../asset/mediaSize"
import { MODAL_ISVISIBLE } from "../../../modules/redux/actions/types";


const userId = "Taejune"
const userPoint = "140"
export default function MainPage() {
    const [width, setWidth] = useState(window.innerWidth);
    const [imgArr, setImgArr] = useState({});
    const modalInfo = useSelector((state: any) => state.modal.status);
    const dispatch = useDispatch();

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
    };

    const clickAttachmentButton = () => {
        dispatch({ type: MODAL_ISVISIBLE, payload: true })
    }
    const closeModal = () => {
        setImgArr({});
        dispatch({ type: MODAL_ISVISIBLE, payload: false })
    }

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    useEffect(() => {
        if (Object.keys(imgArr).length > 0) {
            clickAttachmentButton()
        }
    }, [modalInfo, imgArr])
    return (
        <Container>
            {modalInfo ?
                <Modal closeModal={closeModal} imgArr={imgArr} />
                : null}
            <Topbar userId={userId} userPoint={userPoint} />
            <MainSession>
                <FixButton windWidth={((width - 975) / 2) + 20}>
                    <Attachment setImgArr={setImgArr} />
                    <Span>내글</Span>
                    <Span>댓글</Span>
                    <Span>추천</Span>
                </FixButton>
                <Card />
            </MainSession>
        </Container>
    )
}

const Container = styled.div`

`

const MainSession = styled.section`
    display:block;
    max-width: 935px;
    margin: auto;
    padding-top: 74px;
`
const FixButton: React.ComponentType<any> = styled.div`
    @media ${device.desktop}{
       bottom:0;
       top:auto;
       position: fixed;
       left: 50%;
       right:0;
       transform: translateX(-50%);
       margin:0 auto;
       width:100%;
       max-width:600px;
       min-width:300px;
    }
    display:flex;
    align-items:center;
    position: fixed;
    right: ${(props: any) => props.windWidth}px;
    top: 74px;
    height: 60px;
    width: 293px;
    border-radius:3px;
    border: 1px solid #dbdbdb;
    background-color:#ffffff;
`

const Span = styled.button`
    font-size:18px;
    font-weight:bold;
    width:25%;
    text-align:center;
    border-left:1px solid #dbdbdb;
    height:100%;
`