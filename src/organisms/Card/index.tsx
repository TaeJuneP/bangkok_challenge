import React from "react"
import styled from "styled-components"

import Header from "../../molecules/CardHeader"
import Img from "../../molecules/CardSlideImg"
import Buttons from "../../molecules/CardButtonsContainer"
import LikePoint from "../../molecules/CardLikePoint"
import Description from "../../molecules/CardDescription"
import Comment from "../../molecules/CardInputComment"

import { device } from "../../asset/mediaSize"

const img = require("../../asset/icons/logo.png")

const data = ["Taejune", "2020.04.08", img, 30, "내용을 적자~~!!"]

export default function Card() {
    return (
        <Container>
            <Header userId={data[0]} />
            <Img img={data[2]} />
            <Buttons />
            <LikePoint point={data[3]} />
            <Description description={data[4]} />
            <Comment />
        </Container >
    )
}

const Container = styled.div`
    max-width:600px;
    min-width:320px;
    margin-bottom: 60px;
    border: 1px solid #dbdbdb;
    border-radius:3px;
    width:100%;
    @media ${device.tablet}{
        margin-bottom:15px;
        margin:auto;
    }
`