import React, { useContext } from "react"
import styled from "styled-components"
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

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.isActive ? palette.primary : palette.primaryContent)};
  border: 1px solid ${palette.primary};
  border: none;
  border-radius: ${shapes.borderRadius};
  color: ${palette.textButtons};
  font-size: 17px;
  font-weight: 600;
  height: 35px;
  width: 35px;
  :hover {
    background-color: ${(props) => (props.isActive ? "inherit" : palette.secondaryContent)};
  }
`
