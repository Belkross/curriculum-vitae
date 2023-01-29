import React from "react"
import styled from "styled-components"
import fullfillNonDefaultLanguageFields from "../functions/fulfill-non-default-language-fields"
import { PageContent } from "../types/types"
import FieldWithIcon from "./field-with-icon"
import { useLanguage } from "./provider-language"

export default function Education() {
  const lang = useLanguage()

  return (
    <Container>
      <h2>{content.title[lang]}</h2>
      <FieldWithIcon text={content.college[lang]} iconId="mdi:university" />
    </Container>
  )
}

const content: PageContent = fullfillNonDefaultLanguageFields({
  title: {
    fr: "Éducation",
  },
  college: {
    fr: "Baccalauréat scientifique",
    en: "Scientific baccalaureate",
  },
})

const Container = styled.section`
  text-align: left;
  width: 100%;
`
