import React from "react"
import ButtonLanguage from "./button-language"
import ButtonThemeMode from "./button-theme-mode"

export default function AppBarTop() {
  return (
    <React.Fragment>
      <ButtonThemeMode />
      <ButtonLanguage />
    </React.Fragment>
  )
}
