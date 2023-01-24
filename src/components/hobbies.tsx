import React from "react"
import styled from "styled-components"
import fullfillNonDefaultLanguageFields from "../functions/fulfill-non-default-language-fields"
import { PageContent } from "../types"
import FieldWithIcon from "./field-with-icon"
import { useLanguage } from "./provider-language"

export default function Hobbies() {
  const lang = useLanguage()

  return (
    <Container>
      <h2>{content.title[lang]}</h2>
      <FieldWithIcon text={content.reading[lang]} iconId="mdi:book-open-page-variant" />
      <FieldWithIcon text={content.badminton[lang]} iconId="mdi:badminton" />
      <FieldWithIcon text={content.boardGames[lang]} iconId="mdi:dice-multiple" />
      <FieldWithIcon text={content.videoGames[lang]} iconId="mdi:controller" />
    </Container>
  )
}

const content: PageContent = fullfillNonDefaultLanguageFields({
  title: {
    fr: "Centres d’intérêt",
    en: "Hobbies",
  },
  reading: {
    fr: "Lecture",
    en: "Reading",
  },
  badminton: {
    fr: "Badminton",
  },
  boardGames: {
    fr: "Jeux de sociétés",
    en: "Board games",
  },
  videoGames: {
    fr: "Jeux vidéos",
    en: "Video games",
  },
})

const Container = styled.section`
  width: 100%;
`
