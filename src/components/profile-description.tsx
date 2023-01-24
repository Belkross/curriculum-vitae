import React from "react"
import styled from "styled-components"
import fullfillNonDefaultLanguageFields from "../functions/fulfill-non-default-language-fields"
import palette from "../theme/palette"
import { PageContent } from "../types"
import { useLanguage } from "./provider-language"

const content: PageContent = fullfillNonDefaultLanguageFields({
  description: {
    fr: "Je me forme en autodidacte depuis maintenant plus d’un an dans le but d’une reconversion dans le développement web. J’ai construit mon expérience autour du langage Javascript avec des projets personnels complets, incluant du contenu backend et frontend. Je suis fasciné par les possibilités de réalisation, de partage que permet le code et c’est pour cette raison que développement web est devenu plus qu’un objectif de carrière. C’est maintenant un rendez-vous journalier.",
  },
  searchingForTitle: {
    fr: "Je recherche: ",
  },
  searchingFor: {
    fr: "un premier job de développeur web frontend à temps plein. J’ai une préférence pour un poste en remote ou incluant du télétravail.",
  },
})

export default function ProfileDescription() {
  const lang = useLanguage()

  return (
    <section>
      <h3>Profil</h3>
      <P>{content.description[lang]}</P>
      <P>
        <Span>{content.searchingForTitle[lang]}</Span>
        {content.searchingFor[lang]}
      </P>
    </section>
  )
}

const P = styled.p`
  margin: 8px 12px;
`

const Span = styled.span`
  color: ${palette.h3};
`
