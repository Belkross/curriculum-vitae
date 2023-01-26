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
      <FieldWithIcon text={content.boardGames[lang]} iconId="mdi:dice-multiple" />
      <FieldWithIcon text={content.badminton[lang]} iconId="mdi:badminton" />
      <FieldWithIcon text={content.videoGames[lang]} iconId="mdi:controller" />
    </Container>
  )
}

const content: PageContent = fullfillNonDefaultLanguageFields({
  title: {
    fr: "Centres d’intérêt",
    en: "Hobbies",
  },
  boardGames: {
    fr: "Jeux de sociétés coopératifs",
    en: "Cooperatives board games",
  },
  badminton: {
    fr: "Badminton. Entraîneur ayant érigé une école de jeune labélisée 4/5 étoiles",
    en: "Badminton. Founder of 4/5 star school",
  },
  videoGames: {
    fr: "Compétiteur sur le jeu de stratégie en temps réel Age of Empire II",
    en: "Competitor on the real-time strategy game Age of Empire II",
  },
})

const Container = styled.section`
  width: 100%;
`
