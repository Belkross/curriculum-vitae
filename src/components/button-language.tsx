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
  border: none;
  width: 35px;
  height: 35px;
  background-color: ${(props) => (props.isActive ? palette.primary : palette.primaryContent)};
  color: ${palette.text};
  border-radius: ${shapes.borderRadius};
  font-size: 17px;
  font-weight: 600;
  border: 1px solid ${palette.primary};
`
