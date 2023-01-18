import React from "react"
import fullfillNonDefaultLanguageFields from "../functions/fulfill-non-default-language-fields"
import { PageContent } from "../types"
import { useLanguage } from "./provider-language"
import { Icon } from "@iconify/react"
import styled from "styled-components"
import palette from "../theme/palette"

type Props = {}

export default function PersonalInformations({}: Props) {
  const lang = useLanguage()
  return (
    <section>
      <h2>Informations personnelles</h2>
      <address>
        <IconField>
          <Button>
            <Icon icon="mdi:city-variant" width="25" />
          </Button>
          <p>{content.town[lang]}</p>
        </IconField>
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

const Button = styled.button`
  background-color: ${palette.background};
  color: ${palette.text};
  width: 35px;
  height: 35px;
  padding: 0;
  border-width: 1px;
  border-style: solid;
  border-color: ${palette.paper};
  border-radius: 3px;
  :hover {
    background-color: ${palette.primary};
  }
`

const IconField = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 6px;
`

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
