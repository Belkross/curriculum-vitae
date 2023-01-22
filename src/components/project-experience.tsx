import React from "react"
import styled from "styled-components"
import { PageContent } from "../types"
import { useLanguage } from "./provider-language"

type MultiLangField = {
  fr: string
  en: string
}

export type ProjectExperienceProps = {
  title: MultiLangField
  description: MultiLangField
  features: MultiLangField
  builtWith: MultiLangField
}

export default function ProjectExperience(props: ProjectExperienceProps) {
  const lang = useLanguage()
  return (
    <article>
      <Title>{props.title[lang]}</Title>
      <P>{props.description[lang]}</P>
      <P>{`${content.features[lang]}: ${props.features[lang]}`}</P>
      {/* <P>{`${content.builtWith[lang]}: ${props.builtWith[lang]}`}</P> */}
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

const Title = styled.h3`
  text-align: left;
`

const P = styled.p`
  margin: 8px;
`