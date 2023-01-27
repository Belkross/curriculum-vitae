import React from "react"
import styled from "styled-components"
import fullfillNonDefaultLanguageFields from "../functions/fulfill-non-default-language-fields"
import palette from "../theme/palette"
import { PageContent } from "../types/types"
import { useLanguage } from "./provider-language"

const content: PageContent = fullfillNonDefaultLanguageFields({
  sectionTitle: {
    fr: "Profil",
    en: "Profile",
  },
  description: {
    fr: "Je pratique la programmation depuis maintenant deux ans dans le but d’une reconversion dans le développement web. J’ai construit mon expérience autour du langage Javascript avec des projets personnels complets, incluant du contenu backend et frontend. Je suis fasciné par les possibilités de réalisation, de partage que permet le code et c’est pour cette raison que développement web est devenu plus qu’un objectif de carrière. C’est maintenant un rendez-vous journalier.",
    en: "I have been learning to code for two years now with the project of retraining in web development. I built my experience around the Javascript language with complete personal projects, including backend and frontend content. I’m fascinated by the possibilities of realization, of sharing that the code allows and this is the reason why web development has become more than a career objective. It is now a daily pastime.",
  },
  searchingForTitle: {
    fr: "Je recherche: ",
    en: "I’m searching for: ",
  },
  searchingFor: {
    fr: "un premier job de développeur web frontend à temps plein. J’ai une préférence pour un poste en remote ou incluant du télétravail.",
    en: "a first frontend web developer full-time job. I have a preference for a remote one or including teleworking.",
  },
})

export default function ProfileDescription() {
  const lang = useLanguage()

  return (
    <section>
      <h3>{content.sectionTitle[lang]}</h3>
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
