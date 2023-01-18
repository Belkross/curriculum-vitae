import React from "react"
import fullfillNonDefaultLanguageFields from "../functions/fulfill-non-default-language-fields"
import { PageContent } from "../types"
import ButtonLanguage from "./button-language"
import ButtonThemeMode from "./button-theme-mode"
import Photo from "./photo"
import { useLanguage } from "./provider-language"

const content: PageContent = fullfillNonDefaultLanguageFields({
  title: {
    fr: "TRUONG Quang-Huy",
  },
  subtitle: {
    fr: "Développeur web frontend junior",
  },
})

export default function Header() {
  const lang = useLanguage()
  return (
    <header>
      <ButtonThemeMode />
      <ButtonLanguage />
      <Photo />
      <h1>{content.title[lang]}</h1>
      <h2>{content.subtitle[lang]}</h2>
    </header>
  )
}
