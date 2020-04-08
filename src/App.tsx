import React from 'react'
import styled, { createGlobalStyle } from "styled-components"
import MainPage from "./pages/MainPage"

export default function App() {
  return (
    <Container >
      <MainPage />
      <GlobalStyle />
    </Container>
  );
}

const Container = styled.div`

`

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    /* font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif'; */
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 1rem;
    word-break: keep-all;
    -webkit-overflow-scrolling: touch;
  }

  html, body, #root {
    width:100%;
    height:100%;
    font-weight: 400;
  }

  button {
    -webkit-appearance: none;
    border-radius: 0;
    border: none;

    :focus {
      outline: 0;
      box-shadow: none !important;
    }
    :hover {
      cursor: pointer !important;
    }

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }

  input {
    :focus {
      outline: 0;
      box-shadow: none !important;
    }
    outline: none;
    border-radius: 0;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;
