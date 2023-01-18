import React from "react"
import fullfillNonDefaultLanguageFields from "../functions/fulfill-non-default-language-fields"
import { PageContent } from "../types"
import { useLanguage } from "./provider-language"

type Props = {}

export default function PersonalInformations({}: Props) {
  const lang = useLanguage()
  return (
    <section>
      <h2>Informations personnelles</h2>
      <address>
        <p>{content.town[lang]}</p>
        <p>{content.phone[lang]}</p>
        <p>{content.mail[lang]}</p>
        <p>{content.github[lang]}</p>
        <p>{content.linkedin[lang]}</p>
      </address>
      <article>
        <p>{content.french[lang]}</p>
        <p>{content.english[lang]}</p>
      </article>
    </section>
  )
}

const content: PageContent = fullfillNonDefaultLanguageFields({
  town: {
    fr: "Besançon, France",
  },
  mail: {
    fr: "belkross.pro@gmail.com",
  },
  phone: {
    fr: "06 71 07 58 65",
  },
  github: {
    fr: "github.com/Belkross",
  },
  linkedin: {
    fr: "linkedin.com/Belkross",
  },
  french: {
    fr: "Français: langue maternelle",
  },
  english: {
    fr: "Anglais: très bon niveau oral et écrit",
  },
})
