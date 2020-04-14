import React from "react"
import styled from "styled-components"

import ImgBox from "../../atoms/AddedImgBox"

type Props = {
    imgArr: any
}

export default function AddedImgList(props: Props) {
    console.log(props.imgArr)

    return (
        <Container>
            {Object.keys(props.imgArr).map((item: any, i: number) => (<ImgBox img={URL.createObjectURL(props.imgArr[item])} key={item} />))}
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height:102px;
    border-top: 1px solid gray;
    border-bottom:1px solid gray;
    display:flex;
    margin-bottom:20px;
    overflow-x:auto;
`