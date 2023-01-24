import React from "react"
import styled from "styled-components"
import breakpoints from "../theme/breakpoints"
import { PageContent } from "../types"
import { useLanguage } from "./provider-language"
import SkillWithIcon from "./skill-with-icon"

export default function Skills() {
  const lang = useLanguage()

  return (
    <section>
      <h2>{content.sectionTitle[lang]}</h2>
      <H3>{content.subtitle1[lang]}</H3>
      <GroupedSkills>
        <div>
          <SkillWithIcon iconId="skill-icons:typescript" text="Typescript" />
          <SkillWithIcon iconId="skill-icons:javascript" text="Javascript" />
          <SkillWithIcon iconId="skill-icons:html" text="HTML5" />
          <SkillWithIcon iconId="skill-icons:css" text="CSS3" />
        </div>
        <div>
          <SkillWithIcon iconId="skill-icons:react-dark" text="React" />
          <SkillWithIcon iconId="skill-icons:gatsby" text="Gatsby" />
          <SkillWithIcon iconId="skill-icons:nodejs-dark" text="Node" />
          <SkillWithIcon iconId="skill-icons:mongodb" text="MongoDB" />
        </div>
        <div>
          <SkillWithIcon iconId="logos:material-ui" text="Mui" />
          <SkillWithIcon iconId="skill-icons:styledcomponents" text="Styled components" />
        </div>
      </GroupedSkills>
      <H3>{content.subtitle2[lang]}</H3>
      <GroupedSkills>
        <SkillWithIcon iconId="skill-icons:git" text={content.git[lang]} />
        <SkillWithIcon iconId="fa-solid:keyboard" text="Clean code" />
        <SkillWithIcon iconId="charm:organisation" text={content.modular[lang]} />
        <SkillWithIcon iconId="eos-icons:cleanup" text="Refactoring" />
        <SkillWithIcon iconId="mdi:shield-tick" text={content.testing[lang]} />
      </GroupedSkills>
    </section>
  )
}

const content: PageContent = {
  sectionTitle: {
    fr: "Compétences",
    en: "Skills",
  },
  subtitle1: {
    fr: "Langages and frameworks",
    en: "Languages and frameworks",
  },
  subtitle2: {
    fr: "Compétences dev générales",
    en: "General dev skills",
  },
  git: {
    fr: "Versioning Git",
    en: "Git versioning",
  },
  modular: {
    fr: "Programmation modulaire",
    en: "Modular programming",
  },
  testing: {
    fr: "Tests (en cours de formation)",
    en: "Testing (currently learning)",
  },
}

const GroupedSkills = styled.div`
  margin: auto 12px;
  ${breakpoints.xs} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
  ${breakpoints.sm} {
    grid-template-columns: repeat(3, 1fr);
  }
`
const H3 = styled.h3`
  margin-bottom: 20px;
`
