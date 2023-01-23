import React from "react"
import styled from "styled-components"
import fullfillNonDefaultLanguageFields from "../functions/fulfill-non-default-language-fields"
import { PageContent } from "../types"
import SwitchLanguage from "./switch-language"
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
      <GroupedButtons>
        <ButtonThemeMode />
        <SwitchLanguage />
      </GroupedButtons>
      <Photo />
      <h1>{content.title[lang]}</h1>
      <h2>{content.subtitle[lang]}</h2>
    </header>
  )
}

const GroupedButtons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
  align-items: center;
`
