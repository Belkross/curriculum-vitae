import React from "react"
import styled from "styled-components"
import breakpoints from "../theme/breakpoints"
import SkillWithIcon from "./skill-with-icon"

export default function Skills() {
  return (
    <section>
      <h2>Compétences</h2>
      <H3>Langages et framework</H3>
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
      <H3>Compétences générales</H3>
      <GroupedSkills>
        <SkillWithIcon iconId="skill-icons:git" text="Versioning Git" />
        <SkillWithIcon iconId="fa-solid:keyboard" text="Clean code" />
        <SkillWithIcon iconId="charm:organisation" text="Programmation modulaire" />
        <SkillWithIcon iconId="eos-icons:cleanup" text="Refactorisation" />
        <SkillWithIcon iconId="mdi:shield-tick" text="Test (en cours de formation)" />
      </GroupedSkills>
    </section>
  )
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
