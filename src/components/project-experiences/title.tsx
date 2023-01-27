import { Icon } from "@iconify/react"
import React, { useState } from "react"
import styled from "styled-components"
import palette from "../../theme/palette"
import shadow from "../../theme/shadow"
import shapes from "../../theme/shapes"
import { useLanguage } from "../provider-language"
import { ProjectExperienceProps } from "./project-experience"

export default function Title(props: ProjectExperienceProps) {
  const [mouseOverButton, setMouseOverButton] = useState(false)
  const lang = useLanguage()

  const toggleMouseOverState = () => setMouseOverButton((prevState) => !prevState)
  const handleClick = () => window.open(props.url[lang], "_blank")

  return (
    <H3>
      <StyledIcon
        icon="ri:external-link-fill"
        onClick={handleClick}
        onMouseEnter={toggleMouseOverState}
        onMouseLeave={toggleMouseOverState}
      />
      <A href={props.url[lang]} target="_blank" mouseOverButton={mouseOverButton}>
        {props.title[lang]}
      </A>
    </H3>
  )
}

const H3 = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 3cm;
  color: ${palette.h3};
  border-radius: ${shapes.borderRadius};
  :hover {
    background-color: ${palette.primaryContent};
  }
`

const StyledIcon = styled(Icon)`
  width: 25px;
  height: 25px;
  color: ${palette.text};
  background-color: ${palette.secondary};
  border-radius: ${shapes.borderRadius};
  border: 1px solid ${palette.secondary};
  box-shadow: ${shadow[2]};
  :hover {
    background-color: ${palette.primaryContent};
  }
`
type AnchorProps = {
  mouseOverButton: boolean
}

const A = styled.a<AnchorProps>`
  text-decoration: ${(props) => (props.mouseOverButton ? "underline" : "inherit")};
`
