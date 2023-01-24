import React from "react"
import styled from "styled-components"
import palette from "../theme/palette"
import shadow from "../theme/shadow"
import shapes from "../theme/shapes"
import ButtonLanguage from "./button-language"

export default function SwitchLanguage() {
  return (
    <Container>
      <ButtonLanguage lang="fr" />
      <ButtonLanguage lang="en" />
    </Container>
  )
}

const Container = styled.div`
  background-color: ${palette.primary};
  border-radius: ${shapes.borderRadius};
  box-shadow: ${shadow[2]};
`
