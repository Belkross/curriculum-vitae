import React from "react"
import styled from "styled-components"
import fullfillNonDefaultLanguageFields from "../functions/fulfill-non-default-language-fields"
import { PageContent } from "../types"
import FieldWithIcon from "./field-with-icon"
import { useLanguage } from "./provider-language"

export default function PersonalInformations() {
  const lang = useLanguage()
  return (
    <Container>
      <h2>Informations</h2>

      <FieldWithIcon text={content.age[lang]} iconId="mdi:face-man" />
      <Address>
        <FieldWithIcon text={content.town[lang]} iconId="mdi:city-variant" />
        <FieldWithIcon text={content.driverLicense[lang]} iconId="mdi:car" />
        <FieldWithIcon text={content.phone[lang]} iconId="mdi:phone" />
        <FieldWithIcon text={content.mail[lang]} iconId="mdi:mail" />
        <FieldWithIcon text={content.github[lang]} iconId="mdi:github" />
        <FieldWithIcon text={content.linkedin[lang]} iconId="mdi:linkedin" />
      </Address>

      <article>
        <FieldWithIcon text={content.french[lang]} iconId="mdi:flag-variant" />
        <FieldWithIcon text={content.english[lang]} iconId="mdi:flag-variant" />
      </article>
    </Container>
  )
}

const Address = styled.address`
  margin-bottom: 1cm;
`

const Container = styled.section`
  width: 100%;
`

const content: PageContent = fullfillNonDefaultLanguageFields({
  age: {
    fr: "31 ans",
    en: "31 years old",
  },
  town: {
    fr: "Besançon, France",
  },
  driverLicense: {
    fr: "Permis B",
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
    en: "French: mother tongue",
  },
  english: {
    fr: "Anglais: très bon niveau oral et écrit",
    en: "English: fluent",
  },
})
