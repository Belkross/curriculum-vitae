import React from "react"
import fullfillNonDefaultLanguageFields from "../functions/fulfill-non-default-language-fields"
import { PageContent } from "../types"
import { useLanguage } from "./provider-language"

const content: PageContent = fullfillNonDefaultLanguageFields({
  description: {
    fr: "Je pratique la programmation depuis 3 ans en autodidacte et je me forme pour me professionaliser dans le web depuis maintenant 1 an. J’ai construit mon expérience autour du langage Javascript avec des projets personnels complets, incluant du contenu backend et frontend. Je suis fasciné par les possibilités de réalisation, de partage que permet le code et c’est pour cette raison que développement web est devenu plus qu’un objectif de carrière. C’est maintenant un rendez-vous journalier.",
  },
  searchingFor: {
    fr: "Je recherche un premier job de développeur web frontend en temps plein. J’ai une préférence pour un poste en remote ou incluant du télétravail.",
  },
})

export default function ProfileDescription() {
  const lang = useLanguage()

  return (
    <section>
      <p>{content.description[lang]}</p>
      <p>{content.searchingFor[lang]}</p>
    </section>
  )
}
