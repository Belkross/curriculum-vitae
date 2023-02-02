import React from "react"
import styled from "styled-components"
import fullfillNonDefaultLanguageFields from "../functions/fulfill-non-default-language-fields"
import { PageContent } from "../types/types"
import Photo from "./photo"
import { useLanguage } from "./provider-language"
import palette from "../theme/palette"
import breakpoints from "../theme/breakpoints"
import shapes from "../theme/shapes"
import shadow from "../theme/shadow"

const content: PageContent = fullfillNonDefaultLanguageFields({
  title: {
    fr: "TRUONG Huy",
  },
  subtitle: {
    fr: "Développeur web front-end",
    en: "Front-end web developer",
  },
})

export default function Header() {
  const lang = useLanguage()
  return (
    <Container>
      <GroupedTitles>
        <H1>{content.title[lang]}</H1>
        <H2>{content.subtitle[lang]}</H2>
      </GroupedTitles>

      <Photo primaryContent={true} />
    </Container>
  )
}

const Container = styled.header`
  align-items: center;
  background-color: ${palette.secondaryContent};
  border-radius: ${shapes.borderRadius};
  box-shadow: ${shadow[2]};
  display: flex;
  flex-flow: column nowrap;
  gap: 16px;
  justify-content: stretch;
  padding: 16px;
  ${breakpoints.sm} {
    flex-flow: row-reverse nowrap;
    justify-content: stretch;
  }
  ${breakpoints.lg} {
    padding: 24px;
  }
`

const GroupedTitles = styled.div`
  flex-grow: 1;
  width: "100%";
`
const H1 = styled.h1`
  margin: 0;
`
const H2 = styled.h2`
  margin: 2mm;
`
