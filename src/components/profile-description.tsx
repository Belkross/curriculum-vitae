import React from "react"
import fullfillNonDefaultLanguageFields from "../functions/fulfill-non-default-language-fields"
import { PageContent } from "../types"
import { useLanguage } from "./provider-language"

const content: PageContent = fullfillNonDefaultLanguageFields({
  description: {
    fr: "Je pratique la programmation depuis 3 ans en autodidacte et je me forme dans le développement web pour me professionaliser depuis maintenant 1 an. J’ai construit mon expérience autour du langage Javascript avec des projets personnels complets (backend et frontend) et de longues heures à lire des documentations.",
  },
  searchingFor: {
    fr: "Je recherche un temps plein en tant que développeur web frontend junior. J’ai une préférence pour un poste en remote, mais j’accepte le travail en présentiel si le poste est dans ma région.",
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
