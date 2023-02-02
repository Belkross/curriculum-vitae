import React, { useContext } from "react"
import styled from "styled-components"
import { Button as defaultButton } from "../theme/components"
import palette from "../theme/palette"
import shapes from "../theme/shapes"
import { LanguageValue, ToggleLanguageContext, useLanguage } from "./provider-language"

type Props = {
  lang: LanguageValue
}

export default function ButtonLanguage({ lang }: Props) {
  const toggleLanguage = useContext(ToggleLanguageContext)

  const isActive = lang === useLanguage()

  return (
    <Button isActive={isActive} onClick={() => toggleLanguage(lang)}>
      {lang}
    </Button>
  )
}

type ButtonProps = {
  readonly isActive: boolean
}

const Button = styled(defaultButton)<ButtonProps>`
  background-color: ${(props) => (props.isActive ? palette.primary : palette.primaryContent)};
  box-shadow: none;
  font-weight: 600;
  height: ${shapes.buttonSize};
  :hover {
    background-color: ${(props) => (props.isActive ? "inherit" : palette.secondaryContent)};
  }
`
