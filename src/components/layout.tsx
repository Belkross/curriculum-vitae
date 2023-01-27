import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import breakpoints from "../theme/breakpoints"
import palette from "../theme/palette"
import shadow from "../theme/shadow"
import shapes from "../theme/shapes"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <Container>
      <GlobalStyle />
      {children}
    </Container>
  )
}

const Container = styled.div`
  max-width: 25cm;
  box-shadow: ${shadow[12]};
  border-radius: ${shapes.borderRadius};
  ${breakpoints.lg} {
    display: flex;
    flex-flow: row nowrap;
  }
`
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${palette.background};
    font-family:  roboto, sans-serif;
    color: ${palette.text};
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    align-items: center;
    margin: 0;
    padding: 0px;
    font-size: 15px;
    ${breakpoints.lg} {
      margin: 1cm;
    }
  }
  h1, h2, h3 {
    text-align: center;
    font-family: inter;
  }

  h2 {
    color: ${palette.h2};
    margin-top: 30px;
    margin-bottom: 12px;
  }

  h3 {
    color: ${palette.h3};
    text-align: left;
    margin: 12px 0px;
  }

  a {
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
    :visited {
      color: inherit;
    }
  }
`
