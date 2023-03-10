import React from "react"
import styled from "styled-components"
import palette from "../../theme/palette"
import { MultiLangField, PageContent } from "../../types/types"
import { useLanguage } from "../provider-language"
import ProjectExperienceTitle from "./project-experience-title"

export type ProjectExperienceProps = {
  title: MultiLangField
  projectType: MultiLangField
  description: MultiLangField
  features: MultiLangField
  builtWith: MultiLangField
  url: MultiLangField
}

export default function ProjectExperience(props: ProjectExperienceProps) {
  const lang = useLanguage()

  return (
    <article>
      <ProjectExperienceTitle {...props} />
      <P>
        <Span>{props.projectType[lang]}</Span>
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
  margin-bottom: 32px;
`
