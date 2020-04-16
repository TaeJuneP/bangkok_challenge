import React from "react";
import styled from "styled-components";

let logo = require("../../../asset/icons/title_logo1.JPG");

export default function TopbarLogo() {
  return (
    <Container>
      <Img src={logo} />
    </Container>
  );
}

const Img = styled.img`
  height: 50px;
  width: 170px;
  margin-right: 10px;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  font-weight: bold;
`;
