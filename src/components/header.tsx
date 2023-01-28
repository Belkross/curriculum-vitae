import React from "react"
import styled from "styled-components"
import fullfillNonDefaultLanguageFields from "../functions/fulfill-non-default-language-fields"
import { PageContent } from "../types/types"
import SwitchLanguage from "./switch-language"
import ButtonThemeMode from "./button-theme-mode"
import Photo from "./photo"
import { useLanguage } from "./provider-language"
import palette from "../theme/palette"
import breakpoints from "../theme/breakpoints"
import shapes from "../theme/shapes"
import shadow from "../theme/shadow"
import ButtonDownloadPdf from "./button-download-pdf"

const content: PageContent = fullfillNonDefaultLanguageFields({
  title: {
    fr: "TRUONG Huy",
  },
  subtitle: {
    fr: "Développeur web front-end React",
    en: "React front-end web developer",
  },
})

export default function Header() {
  const lang = useLanguage()
  return (
    <Container>
      <GroupedButtons>
        <FirstGroupedButtons>
          <ButtonThemeMode />
          <SwitchLanguage />
        </FirstGroupedButtons>
        <ButtonDownloadPdf />
      </GroupedButtons>
      <GroupedTitles>
        <H1>{content.title[lang]}</H1>
        <H2>{content.subtitle[lang]}</H2>
      </GroupedTitles>
      <Photo primaryContent={true} />
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  align-items: center;
  gap: 16px;
  background-color: ${palette.secondaryContent};
  padding: 16px;
  border-radius: ${shapes.borderRadius};
  box-shadow: ${shadow[2]};
  ${breakpoints.sm} {
    flex-flow: row-reverse nowrap;
    justify-content: stretch;
  }
`
const GroupedButtons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 8px;
  ${breakpoints.sm} {
    flex-flow: column nowrap;
    align-items: flex-end;
    align-self: center;
  }
`

const FirstGroupedButtons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 8px;
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
