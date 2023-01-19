import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import breakpoints from "../theme/breakpoints"
import palette from "../theme/palette"

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
  max-width: 22cm;
  ${breakpoints.lg} {
    display: flex;
    flex-flow: row nowrap;
  }
`
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${palette.background};
    font-family: roboto, sans-serif;
    color: ${palette.text};
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    align-items: center;
    padding: 8px;
  }
  h1, h2, h3 {
    text-align: center;
  }
  p {
    margin: 0;
  }
`
