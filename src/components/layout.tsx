import React from "react"
import styled from "styled-components"
import { breakpoints } from "../theme/breakpoints"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  max-width: 28cm;
  ${breakpoints.lg} {
    display: flex;
    flex-flow: row nowrap;
  }
`
