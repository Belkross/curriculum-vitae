import React, { useContext } from "react"
import styled from "styled-components"
import palette from "../theme/palette"
import shapes from "../theme/shapes"
import ButtonLanguage from "./button-language"
import { ToggleLanguageContext } from "./provider-language"

export default function SwitchLanguage() {
  const toggleLanguage = useContext(ToggleLanguageContext)

  return (
    <Container>
      <ButtonLanguage lang="fr"/>
      <ButtonLanguage lang="en"/>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${palette.primary};
  border-radius: ${shapes.borderRadius};
`

