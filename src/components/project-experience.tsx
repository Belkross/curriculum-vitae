import React from "react"
import styled from "styled-components"
import palette from "../theme/palette"
import { PageContent } from "../types/types"
import IconButton from "./icon-button"
import { useLanguage } from "./provider-language"

type MultiLangField = {
  fr: string
  en: string
}

export type ProjectExperienceProps = {
  title: MultiLangField
  type: MultiLangField
  description: MultiLangField
  features: MultiLangField
  builtWith: MultiLangField
  url: MultiLangField
}

export default function ProjectExperience(props: ProjectExperienceProps) {
  const lang = useLanguage()
  return (
    <article>
      <h3>
        <a href={props.url[lang]} target="_blank">
          {props.title[lang]}
        </a>
      </h3>
      <P>
        <Span>{props.type[lang]}</Span>
        {props.description[lang]}
      </P>
      <P>{`${content.features[lang]}: ${props.features[lang]}`}</P>
      <BuiltWith>{`${content.builtWith[lang]}: ${props.builtWith[lang]}`}</BuiltWith>
    </article>
  )
}

const content: PageContent = {
  features: {
    fr: "Principales fonctionnalités",
    en: "Main features",
  },
  builtWith: {
    fr: "Technologies utilisées",
    en: "Built With",
  },
}

const P = styled.p`
  margin: 8px 12px;
`

const Span = styled.span`
  color: ${palette.h3};
`

const BuiltWith = styled(P)`
  font-size: 0.9em;
  font-style: italic;
`
