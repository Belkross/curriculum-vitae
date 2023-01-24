import React from "react"
import styled from "styled-components"
import fullfillNonDefaultLanguageFields from "../functions/fulfill-non-default-language-fields"
import { PageContent } from "../types"
import SwitchLanguage from "./switch-language"
import ButtonThemeMode from "./button-theme-mode"
import Photo from "./photo"
import { useLanguage } from "./provider-language"
import palette from "../theme/palette"

const content: PageContent = fullfillNonDefaultLanguageFields({
  title: {
    fr: "TRUONG Huy",
  },
  subtitle: {
    fr: "Développeur web frontend junior",
  },
})

export default function Header() {
  const lang = useLanguage()
  return (
    <Container>
      <GroupedButtons>
        <ButtonThemeMode />
        <SwitchLanguage />
      </GroupedButtons>
      <Photo />
      <GroupedTitles>
        <H1>{content.title[lang]}</H1>
        <H2>{content.subtitle[lang]}</H2>
      </GroupedTitles>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: stretch;
  align-items: flex-start;
`
const GroupedButtons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
  align-items: center;
`

const GroupedTitles = styled.div`
  width: "100%";
  flex-grow: 1;
`
const H1 = styled.h1`
  margin: 0;
`
const H2 = styled.h2`
  margin: 2mm;
`
